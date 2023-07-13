// 分数

import {Sprite} from "../base/Sprite.js";

export class Score extends Sprite {
    constructor(){
        super();
    }

    draw(){
        this.drawTitle();
        this.drawBest();
        this.drawScore();
        this.drawPoint();
    }

    // 绘制title
    drawTitle(){
        const dataStore = this.dataStore;
        const title = dataStore.res.get('title');

        const top = 55 / 2 + title.top;

        super.drawNumber(title.titleText,title.x, top, title.color, title.fontSize, 'left');
    }

    // 绘制历史最高
    drawBest(){
        const dataStore = this.dataStore;
        const button = dataStore.res.get('button');
        const BEST = dataStore.BEST;
        const SCORE = dataStore.SCORE;

        if(SCORE > BEST){
            this.dataStore.BEST = SCORE;
        }

        super.draw(button.x, button.top, button.width, 55, button.radius, button.bgColor);
		super.drawNumber('历史最高', button.x + button.width / 2, button.top + 15, button.titleColor, 12, 'center', 'lighter');
        super.drawNumber(this.dataStore.BEST, button.x + button.width/2, button.top + 38, button.color, button.fontSize);
    }

    // 绘制分数
    drawScore(){
        const dataStore = this.dataStore;
        const button = dataStore.res.get('button');

        const SCORE = dataStore.SCORE;

        const x = button.x - button.width - button.space;
        const textX = x + button.width/2;
        const textY = button.top + 38;


        super.draw(x, button.top, button.width, 55, button.radius, button.bgColor);
		super.drawNumber('当前得分', textX, button.top + 15, button.titleColor, 12, 'center', 'lighter');
        super.drawNumber(SCORE, textX, textY, button.color, button.fontSize);


        if(dataStore.isPlus && dataStore.plus > 0){

            super.drawNumber('+'+dataStore.plus, textX, textY-(100*dataStore.plusPer), button.plusColor, button.fontSize, 'center', 'bold', 1 - dataStore.plusPer);

            this.dataStore.plusPer = Math.round((this.dataStore.plusPer + 0.02)*1000)/1000;

            if(this.dataStore.plusPer >= 1 ) {
                this.dataStore.plusPer = 0;
                this.dataStore.isPlus = false;
                this.dataStore.plus = 0;
            }
        }
    }


    drawPoint(){
        const x = this.dataStore.canvas.width/2;
        const y = this.dataStore.canvas.height;

		// super.drawNumber('温馨提示：仅支持手机端哦~~', x, y, '#bbada0', 13, 'center', 'lighter', 1, 'Microsoft YaHei');
		super.drawNumber('说明：左右滑动移动砖块，使之合并成一个', x, y - 55, '#bbada0', 14, 'center', 'lighter', 1, 'Microsoft YaHei')
		super.drawNumber('努力玩到2048吧~~', x, y - 30, '#bbada0', 14, 'center', 'lighter', 1, 'Microsoft YaHei')
    }
}
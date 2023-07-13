// 游戏结束
import {Sprite} from "../base/Sprite.js";

export class GameOver extends Sprite {
    constructor(){
        super();
    }

    draw(){
        const board = this.dataStore.res.get('board');
        const over = this.dataStore.res.get('over');

        super.draw(board.x, board.y, board.width, board.height, board.radius, over.bgColor, 1, this.dataStore.overPer);
        super.drawNumber('游戏结束！', board.x + board.width/2, board.y + board.width/2 - 18, over.color, over.fontSize, 'center', 'bold', this.dataStore.overPer);

        super.drawNumber('当前得分：'+ this.dataStore.SCORE + ' ',
                        board.x + board.width/2,
                        board.y + board.width/2 + 18,
                        over.color, 14, 'center', '400', this.dataStore.overPer)
    }
}
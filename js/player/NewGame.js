// 新游戏按钮
import {Sprite} from "../base/Sprite.js";

export class NewGame extends Sprite {
    constructor(){
        super();
    }

    draw(){
        const dataStore = this.dataStore;
        const board = dataStore.res.get('board');
        const sButton = dataStore.res.get('startButton');

        sButton.x = board.x + board.width - sButton.width;

        super.draw(sButton.x, sButton.top, sButton.width, sButton.height, sButton.radius, sButton.bgColor, 1);
        super.drawNumber(sButton.titleText, sButton.x + (sButton.width/2), sButton.top + (sButton.height/2), sButton.color, sButton.fontSize);
    }
}
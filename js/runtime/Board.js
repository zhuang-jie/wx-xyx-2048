// 2048棋盘
import {DataStore} from "../base/DataStore.js";
import {Sprite} from "../base/Sprite.js";

export class Board extends Sprite{

    constructor(){
        const board = DataStore.getInstance().res.get('board');

        super( board.x, board.y, board.width, board.height, board.radius, board.bgColor );
    }

    draw(){

        this.drawBg();

        // 绘制棋盘背景
        super.draw();

        const dataStore = this.dataStore;
        const bgGrids = dataStore.bgGrids;
        const grids = dataStore.grids;



        // 绘制棋盘格子
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                const bgItem = bgGrids[i][j];
                const item = grids[i][j];

                // 绘制背景棋盘格子
                super.draw(bgItem.x, bgItem.y, bgItem.width, bgItem.height, bgItem.radius, bgItem.bgColor )

                if(dataStore.isMove){
                    if(item.isMove){
                        this.gridMoveAnimation(item.newX, item.newY, i, j, item.oldValue);
                    }
                    continue;
                }

                if(item.value === 0){
                    continue;
                }

                const dataColor = dataStore.res.get(item.value);
                item.color = dataColor.color;
                item.bgColor = dataColor.bgColor;
                item.fontSize = dataColor.fontSize;
                item.shadowBlur = dataColor.shadowBlur;
                item.shadowColor = dataColor.shadowColor;

                if(!item.new){
                    item.scale = Math.round((item.scale + 0.1)*100)/100;
                    if(item.scale >= 1){
                        item.scale = 1;
                        item.new = true;
                    }
                }

                if(item.isMerged){
                    if(item.merged){
                        item.scale = Math.round((item.scale + 0.1)*100)/100;
                        if(item.scale >= 1.3){
                            item.scale = 1.3;
                            item.merged = false;
                        }
                    }else{

                        item.scale = Math.round((item.scale - 0.1)*100)/100;
                        if(item.scale <= 1){
                            item.scale = 1;
                            item.isMerged = false;
                        }
                    }
                }

                super.draw(bgItem.x, bgItem.y, bgItem.width, bgItem.height, bgItem.radius, item.bgColor, item.scale, 1, item.shadowBlur, item.shadowColor);
                this.drawNumber(item.value, bgItem.x + bgItem.width/2, bgItem.y + bgItem.height/2, item.color, item.fontSize * item.scale );

            }
        }


    }


    // 块移动动画
    gridMoveAnimation(newX, newY, x, y, value){
        const dataStore = this.dataStore;
        const toGrid = dataStore.bgGrids[newX][newY];
        const fromGrid = dataStore.bgGrids[x][y];


        const dataColor = dataStore.res.get(value);

        const perX = Math.abs( fromGrid.x - toGrid.x ) * this.dataStore.per;
        const perY = Math.abs( fromGrid.y - toGrid.y ) * this.dataStore.per;

        const X = fromGrid.x >= toGrid.x ? (fromGrid.x-perX) : (fromGrid.x+perX);
        const Y = fromGrid.y >= toGrid.y ? (fromGrid.y-perY) : (fromGrid.y+perY);

        super.draw(X, Y, fromGrid.width, fromGrid.height, fromGrid.radius, dataColor.bgColor, 1, 1, dataColor.shadowBlur, dataColor.shadowColor);
        this.drawNumber(value, X + fromGrid.width/2, Y + fromGrid.height/2, dataColor.color, dataColor.fontSize );

    }

    // 背景颜色
    drawBg(){
        const bgColor = this.dataStore.res.get('body').bgColor;
        const canvas = this.dataStore.canvas;

        super.draw(0, 0, canvas.width, canvas.height, 0, bgColor, 1);
    }


}
// 初始化整个游戏的精灵，作为游戏开始的入口
import {Resources} from "./js/base/Resources.js";
import {DataStore} from "./js/base/DataStore.js";

import {Director} from "./js/Director.js";


import {Board} from "./js/runtime/Board.js";

import {Score} from "./js/player/Score.js";
import {NewGame} from "./js/player/NewGame.js";

import {GameOver} from "./js/runtime/GameOver.js";

export class Main {
    constructor(){
        this.canvas = wx.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = new Map(Resources);


        // this.dataStore.isAnimation = true;  // 是否在动
        this.dataStore.isGameOver = false;  // 是否游戏结束
        this.dataStore.isMove = false;      //  是否在移动
        this.dataStore.newGrid = false;     // 是否生成一个grid
        this.dataStore.per = 1;             // grid移动是的比率
        this.dataStore.BEST = 0;            // 历史最高分
        this.dataStore.SCORE = 0;           // 当前得分
        this.dataStore.isPlus = false;      // 是否加分
        this.dataStore.plus = 0;            // 加的分
        this.dataStore.plusPer = 0;         // 加的分移动的比率
        this.dataStore.overBoard = false;   // 游戏结束的板
        this.dataStore.overPer = 0;         // 游戏结束的板的比率

        this.init();
    }


    init(){

		const storage = wx.getStorageSync('zhuangchujie_xyx_2048');

        if(storage){
            this.dataStore.BEST = storage.BEST;
            if(!storage.isGameOver){
                this.dataStore.SCORE = storage.SCORE;
                this.dataStore.isPlus = true;
                this.dataStore.plus = storage.SCORE;
            }
        }
        // 设置背景和格子属性
        this.setBoardAndGrids();


        this.dataStore
            .put('board', Board)
            .put('score', Score)
            .put('newGame', NewGame)
            .put('gameOver', GameOver)


        this.director.run()
        this.director.bindTouch();
        this.director.bindNewGame();

    }


    // 设置背景和格子属性
    setBoardAndGrids(){

		const storage = wx.getStorageSync('zhuangchujie_xyx_2048');

        // 设置背景棋盘属性
        const board = this.dataStore.res.get('board');
        board.x = (this.canvas.width - board.width)/2;

        board.gridW = ( board.width - board.space * 5 ) / 4;

        this.dataStore.res.get('title').x = board.x;

        this.dataStore.res.get('button').x = board.x + board.width - this.dataStore.res.get('button').width;

        // 设置格子属性
        const bgGrids = new Array();
        const grids = new Array();

        for(let i = 0; i < 4; i++){
            bgGrids[i] = new Array();
            grids[i] = new Array();
            for(let t = 0; t< 4; t++){
                const x = board.x + board.space + t*(board.gridW + board.space);
                const y = board.y + board.space + i*(board.gridW + board.space);
                bgGrids[i][t] = {
                    x: x,
                    y: y,
                    width: board.gridW,
                    height: board.gridW,
                    color: board.color,
                    bgColor: board.gridColor,
                    radius: board.radius
                };
                let storageValue = 0;
                if(storage){
                    storageValue = storage.isGameOver ? 0 : storage.grids[i][t].value;
                }

                grids[i][t] = {
                    value: storageValue,
                    isMove: false,  //是否移动
                    isMerged: false,  //是否合并
                    merged: false,  // 合并
                    new: false, // 新生成
                    conflicted: false,//是否合并过？
                    scale: 0    //缩放
                };
            }
        }

        this.dataStore.grids = grids;
        this.dataStore.bgGrids = bgGrids;

        if(!storage || storage.isGameOver){
            this.director.generateOneNumber();
            this.director.generateOneNumber();
        }
    }

}
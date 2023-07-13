
import {DataStore} from "./base/DataStore.js";


export class Director {

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    constructor(){
        this.dataStore = DataStore.getInstance();
        this.isClickBtn = false;
    }



    // 随机生成一个数字
    generateOneNumber(){
        const grids = this.dataStore.grids;
        const randA = new Array();
        for(let i=0; i<4; i++){
            for(let j=0; j<4; j++){
                if( grids[i][j].value == 0 ){
                    randA.push( { x:i, y:j } );
                }
            }
        }

        if(randA.length === 0){
            return false;
        }
        //随机一个位置
        var random = parseInt( Math.floor( Math.random()*randA.length ) );
        var x = randA[random].x;
        var y = randA[random].y;

        //随机数字
        var randNumber = Math.random() < 0.8 ? 2 : 4;

        this.dataStore.grids[x][y].value = randNumber;
        this.dataStore.grids[x][y].merged = false;
        this.dataStore.grids[x][y].isMerged = false;
        this.dataStore.grids[x][y].new = false;
        this.dataStore.grids[x][y].isMove = false;
        this.dataStore.grids[x][y].scale = 0;
        this.dataStore.grids[x][y].conflicted = false;
    }

    //判断一行的某块旁边是否有障碍物
    noBlockHorizontal( row, col1, col2 ){
        for( let i=col1+1; i<col2; i++ ){
            if( this.dataStore.grids[row][i].value !== 0 ){
                return false;
            }
        }
        return true;
    }

    //判断一列的某块旁边是否有障碍物
    noBlockVertical( col, row1, row2 ){
        for( var i=row1+1; i<row2; i++ ){
            if( this.dataStore.grids[i][col].value !== 0 ){
                return false;
            }
        }
        return true;
    }

    // 判断是否可向left移动
    isMoveLeft(){
        const grids = this.dataStore.grids;
        for( let i=0; i<4; i++ ){
            for(let j=1; j<4; j++){
                if( grids[i][j].value != 0 ){
                    if( grids[i][j-1].value === 0 || grids[i][j-1].value === grids[i][j].value ){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    // 判断是否可向right移动
    isMoveRight(){
        const grids = this.dataStore.grids;
        for( let i=0; i<4; i++ ){
            for(let j=2; j>=0; j--){
                if( grids[i][j].value != 0 ){
                    if( grids[i][j+1].value === 0 || grids[i][j+1].value === grids[i][j].value ){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    // 判断是否可向up移动
    isMoveUp(){
        const grids = this.dataStore.grids;
        for( let i=1; i<4; i++ ){
            for(let j=0; j<4; j++){
                if( grids[i][j].value != 0 ){
                    if( grids[i-1][j].value === 0 || grids[i-1][j].value === grids[i][j].value ){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    // 判断是否可向down移动
    isMoveDown(){
        const grids = this.dataStore.grids;
        for( let i=2; i>=0; i-- ){
            for(let j=0; j<4; j++){
                if( grids[i][j].value != 0 ){
                    if( grids[i+1][j].value === 0 || grids[i+1][j].value === grids[i][j].value ){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    //left移动
    moveLeft(){
        const grids = this.dataStore.grids;
        for(let i=0; i<4; i++){
            for( let j=0; j<4; j++ ){
                if( grids[i][j].value != 0 ){
                    grids[i][j].newX = i;
                    grids[i][j].newY = j;
                    grids[i][j].isMove = true;
                    grids[i][j].oldValue = grids[i][j].value;

                    for( let k=0; k<j; k++ ){
                        if(grids[i][k].value === 0 && this.noBlockHorizontal( i, j, k ) ){
                            if( grids[i][j].value !== 0 ){
                                grids[i][j].newX = i;
                                grids[i][j].newY = k;
                            }

                            grids[i][k].value = grids[i][j].value;

                            grids[i][j].value = 0;

                        }else if( grids[i][k].value === grids[i][j].value && this.noBlockHorizontal( i, k, j ) && !grids[i][k].conflicted ){

                            if( grids[i][j].value !== 0 ){
                                grids[i][j].newX = i;
                                grids[i][j].newY = k;
                            }

                            grids[i][k].conflicted = true;
                            grids[i][k].value += grids[i][j].value;
                            grids[i][k].isMerged = true;
                            grids[i][k].merged = true;

                            grids[i][j].value = 0;

                            this.dataStore.plus += grids[i][k].value;

                        }
                    }
                }
            }
        }

        this.dataStore.SCORE = this.dataStore.SCORE + this.dataStore.plus;

    }

    //right移动
    moveRight(){
        const grids = this.dataStore.grids;
        for(let i=0; i<4; i++){
            for( let j=3; j>=0; j-- ){
                if( grids[i][j].value != 0 ){

                    grids[i][j].newX = i;
                    grids[i][j].newY = j;
                    grids[i][j].isMove = true;
                    grids[i][j].oldValue = grids[i][j].value;

                    for( let k=3; k>j; k-- ){

                        if(grids[i][k].value === 0 && this.noBlockHorizontal( i, j, k ) ){
                            if( grids[i][j].value !== 0 ){
                                grids[i][j].newX = i;
                                grids[i][j].newY = k;
                            }

                            grids[i][k].value = grids[i][j].value;

                            grids[i][j].value = 0;

                        }else if( grids[i][k].value === grids[i][j].value && this.noBlockHorizontal( i, j, k ) && !grids[i][k].conflicted ){
                            if( grids[i][j].value !== 0 ){
                                grids[i][j].newX = i;
                                grids[i][j].newY = k;
                            }

                            grids[i][k].conflicted = true;
                            grids[i][k].value += grids[i][j].value;
                            grids[i][k].isMerged = true;
                            grids[i][k].merged = true;

                            grids[i][j].value = 0;

                            this.dataStore.plus += grids[i][k].value;
                        }
                    }
                }
            }
        }
        this.dataStore.SCORE = this.dataStore.SCORE + this.dataStore.plus;
    }

    //up移动
    moveUp(){
        const grids = this.dataStore.grids;
        for(let j=0; j<4; j++){
            for( let i=0; i<4; i++ ){
                if( grids[i][j].value != 0 ){
                    grids[i][j].newX = i;
                    grids[i][j].newY = j;
                    grids[i][j].isMove = true;
                    grids[i][j].oldValue = grids[i][j].value;

                    for( let k=0; k<i; k++ ){
                        if(grids[k][j].value === 0 && this.noBlockVertical( j, k, i ) ){
                            if( grids[i][j].value !== 0 ){
                                grids[i][j].newX = k;
                                grids[i][j].newY = j;
                            }

                            grids[k][j].value = grids[i][j].value;

                            grids[i][j].value = 0;

                        }else if( grids[k][j].value === grids[i][j].value && this.noBlockVertical( j, k, i ) && !grids[k][j].conflicted ){
                            if( grids[i][j].value !== 0 ){
                                grids[i][j].newX = k;
                                grids[i][j].newY = j;
                            }

                            grids[k][j].conflicted = true;
                            grids[k][j].value += grids[i][j].value;
                            grids[k][j].isMerged = true;
                            grids[k][j].merged = true;

                            grids[i][j].value = 0;

                            this.dataStore.plus += grids[k][j].value;

                        }
                    }
                }
            }
        }
        this.dataStore.SCORE = this.dataStore.SCORE + this.dataStore.plus;
    }

    //down移动
    moveDown(){
        const grids = this.dataStore.grids;
        for(let j=0; j<4; j++){
            for( let i=3; i>=0; i--){
                if( grids[i][j].value != 0 ){

                    grids[i][j].newX = i;
                    grids[i][j].newY = j;
                    grids[i][j].isMove = true;
                    grids[i][j].oldValue = grids[i][j].value;

                    for( let k=3; k>i; k-- ){
                        if(grids[k][j].value === 0 && this.noBlockVertical( j, i, k ) ){
                            if( grids[i][j].value !== 0 ){
                                grids[i][j].newX = k;
                                grids[i][j].newY = j;
                            }

                            grids[k][j].value = grids[i][j].value;

                            grids[i][j].value = 0;

                        }else if( grids[k][j].value === grids[i][j].value && this.noBlockVertical( j, i, k ) && !grids[k][j].conflicted ){
                            if( grids[i][j].value !== 0 ){
                                grids[i][j].newX = k;
                                grids[i][j].newY = j;
                            }

                            grids[k][j].conflicted = true;
                            grids[k][j].value += grids[i][j].value;
                            grids[k][j].isMerged = true;
                            grids[k][j].merged = true;

                            grids[i][j].value = 0;

                            this.dataStore.plus += grids[k][j].value;

                        }
                    }
                }
            }
        }
        this.dataStore.SCORE = this.dataStore.SCORE + this.dataStore.plus;
    }

    // 绑定Touch事件
    bindTouch(){
        const canvas = this.dataStore.canvas;
        const width = canvas.width;

		wx.onTouchStart((event) => {
			this.startX = event.touches[0].pageX;
			this.startY = event.touches[0].pageY;
		});


		wx.onTouchEnd(( event ) => {

            this.endX = event.changedTouches[0].pageX;
            this.endY = event.changedTouches[0].pageY;

            var x = this.endX - this.startX;
            var y = this.endY - this.startY;
            if( ( Math.abs(x) < 50 && Math.abs(y) < 50 ) || this.dataStore.isGameOver )
                return;

            if( Math.abs(x) >= Math.abs(y) ){
                if( x > 0 ){
                    //right
                    if(!this.dataStore.isMove && this.isMoveRight()){
                        this.dataStore.isMove = true;
                        this.dataStore.newGrid = true;
                        this.dataStore.per = 0;

                        this.dataStore.isPlus = true;
                        this.dataStore.plus = 0;
                        this.dataStore.plusPer = 0;
                        this.moveRight();
                    }
                }else{
                    //left
                    if(!this.dataStore.isMove && this.isMoveLeft()){
                        this.dataStore.isMove = true;
                        this.dataStore.newGrid = true;
                        this.dataStore.per = 0;

                        this.dataStore.isPlus = true;
                        this.dataStore.plus = 0;
                        this.dataStore.plusPer = 0;
                        this.moveLeft();
                    }
                }
            }else{
                if( y > 0 ){
                    //down
                    if(!this.dataStore.isMove && this.isMoveDown()){
                        this.dataStore.isMove = true;
                        this.dataStore.newGrid = true;
                        this.dataStore.per = 0;

                        this.dataStore.isPlus = true;
                        this.dataStore.plus = 0;
                        this.dataStore.plusPer = 0;
                        this.moveDown();
                    }
                }else{
                    //up
                    if(!this.dataStore.isMove && this.isMoveUp()){
                        this.dataStore.isMove = true;
                        this.dataStore.newGrid = true;
                        this.dataStore.per = 0;

                        this.dataStore.isPlus = true;
                        this.dataStore.plus = 0;
                        this.dataStore.plusPer = 0;
                        this.moveUp();
                    }
                }
            }
        });

    }


    // 绑定New Game 按钮点击事件
    bindNewGame(){
        const sButton = this.dataStore.res.get('startButton');

        const isBtnRange = function (x, y) {
            if( x >= sButton.x &&
                x <= (sButton.x + sButton.width) &&
                y >= sButton.top &&
                y <= (sButton.top + sButton.height) ){
                return true;
            }
            return false;
        }

        
        
		wx.onTouchStart(( event ) => {

            if( !isBtnRange(this.startX, this.startY) ) return;
            this.isClickBtn = true;

        });

		wx.onTouchEnd(( event ) => {
            if( !isBtnRange(this.endX, this.endY) ){
                this.isClickBtn = false;
                return;
            }
            if(this.isClickBtn){
                this.newGame();
            }
            this.isClickBtn = false;
        });
    }


    // 重置grids
    resetGrids(){
        const grids = this.dataStore.grids;

        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                grids[i][j].conflicted = false;
                grids[i][j].isMove = false;
                delete grids[i][j].newX;
                delete grids[i][j].newY;
                delete grids[i][j].oldValue;
                if( grids[i][j].value === 0 ){
                    grids[i][j].new = false;
                    grids[i][j].scale = 0;
                }else{
                    grids[i][j].new = true;
                    grids[i][j].scale = 1;
                }

            }
        }
    }


    // 新游戏
    newGame(){

        this.dataStore.isGameOver = false;  // 是否游戏结束
        this.dataStore.isMove = false;      //  是否在移动
        this.dataStore.newGrid = false;     // 是否生成一个grid
        this.dataStore.per = 1;             // grid移动是的比率
        this.dataStore.SCORE = 0;           // 当前得分
        this.dataStore.isPlus = false;      // 是否加分
        this.dataStore.plus = 0;            // 加的分
        this.dataStore.plusPer = 0;         // 加的分移动的比率
        this.dataStore.overBoard = false;   // 游戏结束的板
        this.dataStore.overPer = 0;         // 游戏结束的板的比率

        const grids = this.dataStore.grids;
        for(let i=0; i<4; i++ ){
            for(let j=0; j<4; j++){
                grids[i][j].isMerged = false;
                grids[i][j].merged = false;
                grids[i][j].conflicted = false;
                grids[i][j].isMove = false;
                grids[i][j].new = false;
                grids[i][j].value = 0;
                grids[i][j].scale = 0;
            }
        }

        this.generateOneNumber();
        this.generateOneNumber();

        this.setLocalStorage();
    }

    // localStorage
    setLocalStorage(){
        const zhuangchujie_xyx_2048 = {
            isGameOver: this.dataStore.isGameOver,
            grids: this.dataStore.grids,
            SCORE: this.dataStore.SCORE,
            BEST: this.dataStore.BEST
        }
		wx.setStorageSync('zhuangchujie_xyx_2048', zhuangchujie_xyx_2048 );
    }


    // grids无空间
    nospace(){

        for(var i=0; i<4; i++)
            for(var j=0; j<4; j++)
                if(this.dataStore.grids[i][j].value === 0)
                    return false;

        return true;
    }

    // grids不可移动
    nomove(){

        if( this.isMoveLeft() || this.isMoveRight() || this.isMoveUp() || this.isMoveDown() )
            return false;

        return true;
    }

    // 游戏结束
    isgameover(){
        if( this.nospace() && this.nomove() ){
            setTimeout( () => {
                this.dataStore.isGameOver = true;
                this.setLocalStorage();
            },500);
        }
    }

    run(){
        if(!this.dataStore.isGameOver){

            if(this.dataStore.isMove){
                this.dataStore.per = Math.round((this.dataStore.per + 0.2)*100)/100;
                if(this.dataStore.per >= 1 ){
                    this.dataStore.per = 1;
                    this.dataStore.isMove = false;
                    this.resetGrids();
                }
            }

            if(!this.dataStore.isMove && this.dataStore.newGrid){
                this.generateOneNumber();
                this.dataStore.newGrid = false;
                this.isgameover();
                this.setLocalStorage();
            }

        }else{
            if(!this.dataStore.overBoard){
                this.dataStore.overPer = Math.round((this.dataStore.overPer + 0.05)*1000)/1000;
                if(this.dataStore.overPer >= 1 ){
                    this.dataStore.overPer = 1;
                    this.dataStore.overBoard = true;
                }
            }
        }

        this.dataStore.get('board').draw();
        this.dataStore.get('score').draw();
        this.dataStore.get('newGame').draw();

        if(this.dataStore.isGameOver){
            this.dataStore.get('gameOver').draw();
        }



        // 动画
        requestAnimationFrame(() => this.run());

   }
}
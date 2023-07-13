/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//变量缓存器，方便我们在不同的类中访问和修改变量

var DataStore = exports.DataStore = function () {
    _createClass(DataStore, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!DataStore.instance) {
                DataStore.instance = new DataStore();
            }
            return DataStore.instance;
        }
    }]);

    function DataStore() {
        _classCallCheck(this, DataStore);

        this.map = new Map();
    }

    _createClass(DataStore, [{
        key: 'put',
        value: function put(key, value) {
            if (typeof value === 'function') {
                value = new value();
            }
            this.map.set(key, value);
            return this;
        }
    }, {
        key: 'get',
        value: function get(key) {
            return this.map.get(key);
        }
    }, {
        key: 'del',
        value: function del(key) {
            this.map.delete(key);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.map.clear();
        }
    }]);

    return DataStore;
}();
//# sourceMappingURL=DataStore.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sprite = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // 2048精灵基类


var _DataStore = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = exports.Sprite = function () {
    function Sprite() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var bgColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '#faf8ef';
        var scale = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

        _classCallCheck(this, Sprite);

        this.dataStore = _DataStore.DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.bgColor = bgColor;
        this.scale = scale;
    }

    _createClass(Sprite, [{
        key: 'draw',
        value: function draw() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;
            var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.width;
            var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.height;
            var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.radius;
            var bgColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.bgColor;
            var scale = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : this.scale;
            var alpha = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
            var shadowBlur = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
            var shadowColor = arguments[9];

            var ctx = this.ctx;
            var position = (width - width * scale) / 2;
            ctx.save();
            ctx.translate(x, y);
            ctx.transform(scale, 0, 0, scale, position, position);
            this.pathRoundRect(ctx, width, height, radius);
            ctx.fillStyle = bgColor;
            if (shadowColor) {
                ctx.shadowBlur = shadowBlur;
                ctx.shadowColor = shadowColor;
            }
            ctx.globalAlpha = alpha;
            ctx.fill();
            ctx.restore();
        }
    }, {
        key: 'pathRoundRect',
        value: function pathRoundRect(ctx, width, height, radius) {
            ctx.beginPath();
            if (radius > 0) {
                ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
                ctx.lineTo(radius, height);
                ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
                ctx.lineTo(0, radius);
                ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
                ctx.lineTo(width - radius, 0);
                ctx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);
            } else {
                ctx.rect(0, 0, width, height);
            }
            ctx.closePath();
        }

        // 绘制格子文字

    }, {
        key: 'drawNumber',
        value: function drawNumber(value, x, y, color, size) {
            var ailgn = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'center';
            var weight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'bold';
            var alpha = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
            var family = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'Arial';
            var baseline = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 'middle';

            var ctx = this.ctx;
            ctx.save();
            ctx.translate(x, y);

            ctx.font = weight + ' ' + size + 'px ' + family;

            ctx.textAlign = ailgn;
            ctx.textBaseline = baseline;

            ctx.globalAlpha = alpha;
            ctx.fillStyle = color;

            ctx.fillText(value, 0, 0);
            ctx.restore();
        }
    }]);

    return Sprite;
}();
//# sourceMappingURL=Sprite.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // 初始化整个游戏的精灵，作为游戏开始的入口


var _Resources = __webpack_require__(4);

var _DataStore = __webpack_require__(0);

var _Director = __webpack_require__(3);

var _Board = __webpack_require__(7);

var _Score = __webpack_require__(6);

var _NewGame = __webpack_require__(5);

var _GameOver = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = exports.Main = function () {
    function Main() {
        _classCallCheck(this, Main);

        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = _DataStore.DataStore.getInstance();
        this.director = _Director.Director.getInstance();
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = new Map(_Resources.Resources);

        // this.dataStore.isAnimation = true;  // 是否在动
        this.dataStore.isGameOver = false; // 是否游戏结束
        this.dataStore.isMove = false; //  是否在移动
        this.dataStore.newGrid = false; // 是否生成一个grid
        this.dataStore.per = 1; // grid移动是的比率
        this.dataStore.BEST = 0; // 历史最高分
        this.dataStore.SCORE = 0; // 当前得分
        this.dataStore.isPlus = false; // 是否加分
        this.dataStore.plus = 0; // 加的分
        this.dataStore.plusPer = 0; // 加的分移动的比率
        this.dataStore.overBoard = false; // 游戏结束的板
        this.dataStore.overPer = 0; // 游戏结束的板的比率

        this.init();
    }

    _createClass(Main, [{
        key: "init",
        value: function init() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;

            var storage = JSON.parse(window.localStorage.getItem('zhuangchujie_xyx_2048'));

            if (storage) {
                this.dataStore.BEST = storage.BEST;
                if (!storage.isGameOver) {
                    this.dataStore.SCORE = storage.SCORE;
                    this.dataStore.isPlus = true;
                    this.dataStore.plus = storage.SCORE;
                }
            }
            // 设置背景和格子属性
            this.setBoardAndGrids();

            this.dataStore.put('board', _Board.Board).put('score', _Score.Score).put('newGame', _NewGame.NewGame).put('gameOver', _GameOver.GameOver);

            this.director.run();
            this.director.bindTouch();
            this.director.bindNewGame();
        }

        // 设置背景和格子属性

    }, {
        key: "setBoardAndGrids",
        value: function setBoardAndGrids() {

            var storage = JSON.parse(window.localStorage.getItem('zhuangchujie_xyx_2048'));

            // 设置背景棋盘属性
            var board = this.dataStore.res.get('board');
            board.x = (this.canvas.width - board.width) / 2;

            board.gridW = (board.width - board.space * 5) / 4;

            this.dataStore.res.get('title').x = board.x;

            this.dataStore.res.get('button').x = board.x + board.width - this.dataStore.res.get('button').width;

            // 设置格子属性
            var bgGrids = new Array();
            var grids = new Array();

            for (var i = 0; i < 4; i++) {
                bgGrids[i] = new Array();
                grids[i] = new Array();
                for (var t = 0; t < 4; t++) {
                    var x = board.x + board.space + t * (board.gridW + board.space);
                    var y = board.y + board.space + i * (board.gridW + board.space);
                    bgGrids[i][t] = {
                        x: x,
                        y: y,
                        width: board.gridW,
                        height: board.gridW,
                        color: board.color,
                        bgColor: board.gridColor,
                        radius: board.radius
                    };
                    var storageValue = 0;
                    if (storage) {
                        storageValue = storage.isGameOver ? 0 : storage.grids[i][t].value;
                    }

                    grids[i][t] = {
                        value: storageValue,
                        isMove: false, //是否移动
                        isMerged: false, //是否合并
                        merged: false, // 合并
                        new: false, // 新生成
                        conflicted: false, //是否合并过？
                        scale: 0 //缩放
                    };
                }
            }

            this.dataStore.grids = grids;
            this.dataStore.bgGrids = bgGrids;

            if (!storage || storage.isGameOver) {
                this.director.generateOneNumber();
                this.director.generateOneNumber();
            }
        }
    }]);

    return Main;
}();
//# sourceMappingURL=main.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Director = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataStore = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Director = exports.Director = function () {
    _createClass(Director, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!Director.instance) {
                Director.instance = new Director();
            }
            return Director.instance;
        }
    }]);

    function Director() {
        _classCallCheck(this, Director);

        this.dataStore = _DataStore.DataStore.getInstance();
        this.isClickBtn = false;
    }

    // 随机生成一个数字


    _createClass(Director, [{
        key: 'generateOneNumber',
        value: function generateOneNumber() {
            var grids = this.dataStore.grids;
            var randA = new Array();
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    if (grids[i][j].value == 0) {
                        randA.push({ x: i, y: j });
                    }
                }
            }

            if (randA.length === 0) {
                return false;
            }
            //随机一个位置
            var random = parseInt(Math.floor(Math.random() * randA.length));
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

    }, {
        key: 'noBlockHorizontal',
        value: function noBlockHorizontal(row, col1, col2) {
            for (var i = col1 + 1; i < col2; i++) {
                if (this.dataStore.grids[row][i].value !== 0) {
                    return false;
                }
            }
            return true;
        }

        //判断一列的某块旁边是否有障碍物

    }, {
        key: 'noBlockVertical',
        value: function noBlockVertical(col, row1, row2) {
            for (var i = row1 + 1; i < row2; i++) {
                if (this.dataStore.grids[i][col].value !== 0) {
                    return false;
                }
            }
            return true;
        }

        // 判断是否可向left移动

    }, {
        key: 'isMoveLeft',
        value: function isMoveLeft() {
            var grids = this.dataStore.grids;
            for (var i = 0; i < 4; i++) {
                for (var j = 1; j < 4; j++) {
                    if (grids[i][j].value != 0) {
                        if (grids[i][j - 1].value === 0 || grids[i][j - 1].value === grids[i][j].value) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        // 判断是否可向right移动

    }, {
        key: 'isMoveRight',
        value: function isMoveRight() {
            var grids = this.dataStore.grids;
            for (var i = 0; i < 4; i++) {
                for (var j = 2; j >= 0; j--) {
                    if (grids[i][j].value != 0) {
                        if (grids[i][j + 1].value === 0 || grids[i][j + 1].value === grids[i][j].value) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        // 判断是否可向up移动

    }, {
        key: 'isMoveUp',
        value: function isMoveUp() {
            var grids = this.dataStore.grids;
            for (var i = 1; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    if (grids[i][j].value != 0) {
                        if (grids[i - 1][j].value === 0 || grids[i - 1][j].value === grids[i][j].value) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        // 判断是否可向down移动

    }, {
        key: 'isMoveDown',
        value: function isMoveDown() {
            var grids = this.dataStore.grids;
            for (var i = 2; i >= 0; i--) {
                for (var j = 0; j < 4; j++) {
                    if (grids[i][j].value != 0) {
                        if (grids[i + 1][j].value === 0 || grids[i + 1][j].value === grids[i][j].value) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        //left移动

    }, {
        key: 'moveLeft',
        value: function moveLeft() {
            var grids = this.dataStore.grids;
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    if (grids[i][j].value != 0) {
                        grids[i][j].newX = i;
                        grids[i][j].newY = j;
                        grids[i][j].isMove = true;
                        grids[i][j].oldValue = grids[i][j].value;

                        for (var k = 0; k < j; k++) {
                            if (grids[i][k].value === 0 && this.noBlockHorizontal(i, j, k)) {
                                if (grids[i][j].value !== 0) {
                                    grids[i][j].newX = i;
                                    grids[i][j].newY = k;
                                }

                                grids[i][k].value = grids[i][j].value;

                                grids[i][j].value = 0;
                            } else if (grids[i][k].value === grids[i][j].value && this.noBlockHorizontal(i, k, j) && !grids[i][k].conflicted) {

                                if (grids[i][j].value !== 0) {
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

    }, {
        key: 'moveRight',
        value: function moveRight() {
            var grids = this.dataStore.grids;
            for (var i = 0; i < 4; i++) {
                for (var j = 3; j >= 0; j--) {
                    if (grids[i][j].value != 0) {

                        grids[i][j].newX = i;
                        grids[i][j].newY = j;
                        grids[i][j].isMove = true;
                        grids[i][j].oldValue = grids[i][j].value;

                        for (var k = 3; k > j; k--) {

                            if (grids[i][k].value === 0 && this.noBlockHorizontal(i, j, k)) {
                                if (grids[i][j].value !== 0) {
                                    grids[i][j].newX = i;
                                    grids[i][j].newY = k;
                                }

                                grids[i][k].value = grids[i][j].value;

                                grids[i][j].value = 0;
                            } else if (grids[i][k].value === grids[i][j].value && this.noBlockHorizontal(i, j, k) && !grids[i][k].conflicted) {
                                if (grids[i][j].value !== 0) {
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

    }, {
        key: 'moveUp',
        value: function moveUp() {
            var grids = this.dataStore.grids;
            for (var j = 0; j < 4; j++) {
                for (var i = 0; i < 4; i++) {
                    if (grids[i][j].value != 0) {
                        grids[i][j].newX = i;
                        grids[i][j].newY = j;
                        grids[i][j].isMove = true;
                        grids[i][j].oldValue = grids[i][j].value;

                        for (var k = 0; k < i; k++) {
                            if (grids[k][j].value === 0 && this.noBlockVertical(j, k, i)) {
                                if (grids[i][j].value !== 0) {
                                    grids[i][j].newX = k;
                                    grids[i][j].newY = j;
                                }

                                grids[k][j].value = grids[i][j].value;

                                grids[i][j].value = 0;
                            } else if (grids[k][j].value === grids[i][j].value && this.noBlockVertical(j, k, i) && !grids[k][j].conflicted) {
                                if (grids[i][j].value !== 0) {
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

    }, {
        key: 'moveDown',
        value: function moveDown() {
            var grids = this.dataStore.grids;
            for (var j = 0; j < 4; j++) {
                for (var i = 3; i >= 0; i--) {
                    if (grids[i][j].value != 0) {

                        grids[i][j].newX = i;
                        grids[i][j].newY = j;
                        grids[i][j].isMove = true;
                        grids[i][j].oldValue = grids[i][j].value;

                        for (var k = 3; k > i; k--) {
                            if (grids[k][j].value === 0 && this.noBlockVertical(j, i, k)) {
                                if (grids[i][j].value !== 0) {
                                    grids[i][j].newX = k;
                                    grids[i][j].newY = j;
                                }

                                grids[k][j].value = grids[i][j].value;

                                grids[i][j].value = 0;
                            } else if (grids[k][j].value === grids[i][j].value && this.noBlockVertical(j, i, k) && !grids[k][j].conflicted) {
                                if (grids[i][j].value !== 0) {
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

    }, {
        key: 'bindTouch',
        value: function bindTouch() {
            var _this = this;

            var canvas = this.dataStore.canvas;
            var width = canvas.width;

            canvas.addEventListener('touchstart', function (event) {
                _this.startX = event.touches[0].pageX;
                _this.startY = event.touches[0].pageY;
            });

            canvas.addEventListener('touchmove', function (event) {
                event.preventDefault();
            });

            canvas.addEventListener('touchend', function (event) {

                _this.endX = event.changedTouches[0].pageX;
                _this.endY = event.changedTouches[0].pageY;

                var x = _this.endX - _this.startX;
                var y = _this.endY - _this.startY;
                if (Math.abs(x) < 50 && Math.abs(y) < 50 || _this.dataStore.isGameOver) return;

                if (Math.abs(x) >= Math.abs(y)) {
                    if (x > 0) {
                        //right
                        if (!_this.dataStore.isMove && _this.isMoveRight()) {
                            _this.dataStore.isMove = true;
                            _this.dataStore.newGrid = true;
                            _this.dataStore.per = 0;

                            _this.dataStore.isPlus = true;
                            _this.dataStore.plus = 0;
                            _this.dataStore.plusPer = 0;
                            _this.moveRight();
                        }
                    } else {
                        //left
                        if (!_this.dataStore.isMove && _this.isMoveLeft()) {
                            _this.dataStore.isMove = true;
                            _this.dataStore.newGrid = true;
                            _this.dataStore.per = 0;

                            _this.dataStore.isPlus = true;
                            _this.dataStore.plus = 0;
                            _this.dataStore.plusPer = 0;
                            _this.moveLeft();
                        }
                    }
                } else {
                    if (y > 0) {
                        //down
                        if (!_this.dataStore.isMove && _this.isMoveDown()) {
                            _this.dataStore.isMove = true;
                            _this.dataStore.newGrid = true;
                            _this.dataStore.per = 0;

                            _this.dataStore.isPlus = true;
                            _this.dataStore.plus = 0;
                            _this.dataStore.plusPer = 0;
                            _this.moveDown();
                        }
                    } else {
                        //up
                        if (!_this.dataStore.isMove && _this.isMoveUp()) {
                            _this.dataStore.isMove = true;
                            _this.dataStore.newGrid = true;
                            _this.dataStore.per = 0;

                            _this.dataStore.isPlus = true;
                            _this.dataStore.plus = 0;
                            _this.dataStore.plusPer = 0;
                            _this.moveUp();
                        }
                    }
                }
            });
        }

        // 绑定New Game 按钮点击事件

    }, {
        key: 'bindNewGame',
        value: function bindNewGame() {
            var _this2 = this;

            var sButton = this.dataStore.res.get('startButton');

            var isBtnRange = function isBtnRange(x, y) {
                if (x >= sButton.x && x <= sButton.x + sButton.width && y >= sButton.top && y <= sButton.top + sButton.height) {
                    return true;
                }
                return false;
            };

            canvas.addEventListener('touchstart', function (event) {

                if (!isBtnRange(_this2.startX, _this2.startY)) return;
                _this2.isClickBtn = true;
            });

            canvas.addEventListener('touchend', function (event) {
                event.preventDefault();
                if (!isBtnRange(_this2.endX, _this2.endY)) {
                    _this2.isClickBtn = false;
                    return;
                }
                if (_this2.isClickBtn) {
                    _this2.newGame();
                }
                _this2.isClickBtn = false;
            });
        }

        // 重置grids

    }, {
        key: 'resetGrids',
        value: function resetGrids() {
            var grids = this.dataStore.grids;

            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    grids[i][j].conflicted = false;
                    grids[i][j].isMove = false;
                    delete grids[i][j].newX;
                    delete grids[i][j].newY;
                    delete grids[i][j].oldValue;
                    if (grids[i][j].value === 0) {
                        grids[i][j].new = false;
                        grids[i][j].scale = 0;
                    } else {
                        grids[i][j].new = true;
                        grids[i][j].scale = 1;
                    }
                }
            }
        }

        // 新游戏

    }, {
        key: 'newGame',
        value: function newGame() {

            this.dataStore.isGameOver = false; // 是否游戏结束
            this.dataStore.isMove = false; //  是否在移动
            this.dataStore.newGrid = false; // 是否生成一个grid
            this.dataStore.per = 1; // grid移动是的比率
            this.dataStore.SCORE = 0; // 当前得分
            this.dataStore.isPlus = false; // 是否加分
            this.dataStore.plus = 0; // 加的分
            this.dataStore.plusPer = 0; // 加的分移动的比率
            this.dataStore.overBoard = false; // 游戏结束的板
            this.dataStore.overPer = 0; // 游戏结束的板的比率

            var grids = this.dataStore.grids;
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
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

    }, {
        key: 'setLocalStorage',
        value: function setLocalStorage() {
            var zhuangchujie_xyx_2048 = {
                isGameOver: this.dataStore.isGameOver,
                grids: this.dataStore.grids,
                SCORE: this.dataStore.SCORE,
                BEST: this.dataStore.BEST
            };
            window.localStorage.setItem('zhuangchujie_xyx_2048', JSON.stringify(zhuangchujie_xyx_2048));
        }

        // grids无空间

    }, {
        key: 'nospace',
        value: function nospace() {

            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    if (this.dataStore.grids[i][j].value === 0) return false;
                }
            }return true;
        }

        // grids不可移动

    }, {
        key: 'nomove',
        value: function nomove() {

            if (this.isMoveLeft() || this.isMoveRight() || this.isMoveUp() || this.isMoveDown()) return false;

            return true;
        }

        // 游戏结束

    }, {
        key: 'isgameover',
        value: function isgameover() {
            var _this3 = this;

            if (this.nospace() && this.nomove()) {
                setTimeout(function () {
                    _this3.dataStore.isGameOver = true;
                    _this3.setLocalStorage();
                }, 500);
            }
        }
    }, {
        key: 'run',
        value: function run() {
            var _this4 = this;

            if (!this.dataStore.isGameOver) {

                if (this.dataStore.isMove) {
                    this.dataStore.per = Math.round((this.dataStore.per + 0.2) * 100) / 100;
                    if (this.dataStore.per >= 1) {
                        this.dataStore.per = 1;
                        this.dataStore.isMove = false;
                        this.resetGrids();
                    }
                }

                if (!this.dataStore.isMove && this.dataStore.newGrid) {
                    this.generateOneNumber();
                    this.dataStore.newGrid = false;
                    this.isgameover();
                    this.setLocalStorage();
                }
            } else {
                if (!this.dataStore.overBoard) {
                    this.dataStore.overPer = Math.round((this.dataStore.overPer + 0.05) * 1000) / 1000;
                    if (this.dataStore.overPer >= 1) {
                        this.dataStore.overPer = 1;
                        this.dataStore.overBoard = true;
                    }
                }
            }

            this.dataStore.get('board').draw();
            this.dataStore.get('score').draw();
            this.dataStore.get('newGame').draw();

            if (this.dataStore.isGameOver) {
                this.dataStore.get('gameOver').draw();
            }

            // 动画
            requestAnimationFrame(function () {
                return _this4.run();
            });
        }
    }]);

    return Director;
}();
//# sourceMappingURL=Director.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 2048棋盘数据
var Resources = exports.Resources = [['body', {
    bgColor: '#faf8ef'
}], ['title', {
    titleText: 2048,
    top: 20,
    fontSize: 28,
    color: '#776e65'
}], ['button', {
    color: 'white',
    bgColor: '#bbada0',
    titleColor: '#eee4da',
    plusColor: 'rgba(119, 110, 101, 0.9)',
    fontSize: 25,
    width: 95,
    radius: 3,
    top: 20,
    space: 5
}], ['startButton', {
    titleText: 'New Game',
    color: '#f9f6f2',
    bgColor: '#8f7a66',
    width: 95,
    height: 40,
    radius: 3,
    top: 95,
    fontSize: 14
}], ['board', {
    width: 300,
    height: 300,
    y: 165,
    radius: 4,
    space: 10,
    color: '#f9f6f2',
    bgColor: '#bbada0',
    gridColor: 'rgba(238, 228, 218, 0.35)'
}], ['over', {
    bgColor: 'rgba(238, 228, 218, 0.5)',
    color: '#776e65',
    fontSize: 30
}], [2, {
    color: '#776e65',
    bgColor: '#eee4da',
    fontSize: 34,
    shadowBlur: 0,
    shadowColor: undefined
}], [4, {
    color: '#776e65',
    bgColor: '#ede0c8',
    fontSize: 34,
    shadowBlur: 0,
    shadowColor: undefined
}], [8, {
    color: '#f9f6f2',
    bgColor: '#f2b179',
    fontSize: 34,
    shadowBlur: 0,
    shadowColor: undefined
}], [16, {
    color: '#f9f6f2',
    bgColor: '#f59563',
    fontSize: 34,
    shadowBlur: 0,
    shadowColor: undefined
}], [32, {
    color: '#f9f6f2',
    bgColor: '#f67c5f',
    fontSize: 34,
    shadowBlur: 0,
    shadowColor: undefined
}], [64, {
    color: '#f9f6f2',
    bgColor: '#f65e3b',
    fontSize: 34,
    shadowBlur: 0,
    shadowColor: undefined
}], [128, {
    color: '#f9f6f2',
    bgColor: '#edcf72',
    fontSize: 28,
    shadowBlur: 0,
    shadowColor: undefined
}], [256, {
    color: '#f9f6f2',
    bgColor: '#edcc61',
    fontSize: 28,
    shadowBlur: 20,
    shadowColor: '#f1d67e'
}], [512, {
    color: '#f9f6f2',
    bgColor: '#edc850',
    fontSize: 28,
    shadowBlur: 20,
    shadowColor: '#eccf72'
}], [1024, {
    color: '#f9f6f2',
    bgColor: '#33b5e5',
    fontSize: 22,
    shadowBlur: 20,
    shadowColor: '#4ebce5'
}], [2048, {
    color: '#f9f6f2',
    bgColor: '#09c',
    fontSize: 22,
    shadowBlur: 20,
    shadowColor: '#24b3e3'
}], [4096, {
    color: '#f9f6f2',
    bgColor: '#a6c',
    fontSize: 22,
    shadowBlur: 20,
    shadowColor: '#c176e7'
}], [8192, {
    color: '#f9f6f2',
    bgColor: '#9933cc',
    fontSize: 22,
    shadowBlur: 20,
    shadowColor: '#af62d6'
}]];
//# sourceMappingURL=Resources.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NewGame = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 新游戏按钮


var NewGame = exports.NewGame = function (_Sprite) {
    _inherits(NewGame, _Sprite);

    function NewGame() {
        _classCallCheck(this, NewGame);

        return _possibleConstructorReturn(this, (NewGame.__proto__ || Object.getPrototypeOf(NewGame)).call(this));
    }

    _createClass(NewGame, [{
        key: 'draw',
        value: function draw() {
            var dataStore = this.dataStore;
            var board = dataStore.res.get('board');
            var sButton = dataStore.res.get('startButton');

            sButton.x = board.x + board.width - sButton.width;

            _get(NewGame.prototype.__proto__ || Object.getPrototypeOf(NewGame.prototype), 'draw', this).call(this, sButton.x, sButton.top, sButton.width, sButton.height, sButton.radius, sButton.bgColor, 1);
            _get(NewGame.prototype.__proto__ || Object.getPrototypeOf(NewGame.prototype), 'drawNumber', this).call(this, sButton.titleText, sButton.x + sButton.width / 2, sButton.top + sButton.height / 2, sButton.color, sButton.fontSize);
        }
    }]);

    return NewGame;
}(_Sprite2.Sprite);
//# sourceMappingURL=NewGame.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Score = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 分数

var Score = exports.Score = function (_Sprite) {
    _inherits(Score, _Sprite);

    function Score() {
        _classCallCheck(this, Score);

        return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this));
    }

    _createClass(Score, [{
        key: 'draw',
        value: function draw() {
            this.drawTitle();
            this.drawBest();
            this.drawScore();
            this.drawPoint();
        }

        // 绘制title

    }, {
        key: 'drawTitle',
        value: function drawTitle() {
            var dataStore = this.dataStore;
            var title = dataStore.res.get('title');

            var top = 55 / 2 + title.top;

            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, title.titleText, title.x, top, title.color, title.fontSize, 'left');
        }

        // 绘制历史最高

    }, {
        key: 'drawBest',
        value: function drawBest() {
            var dataStore = this.dataStore;
            var button = dataStore.res.get('button');
            var BEST = dataStore.BEST;
            var SCORE = dataStore.SCORE;

            if (SCORE > BEST) {
                this.dataStore.BEST = SCORE;
            }

            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'draw', this).call(this, button.x, button.top, button.width, 55, button.radius, button.bgColor);
            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, '历史最高', button.x + button.width / 2, button.top + 15, button.titleColor, 11, 'center', 400);
            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, this.dataStore.BEST, button.x + button.width / 2, button.top + 38, button.color, button.fontSize);
        }

        // 绘制分数

    }, {
        key: 'drawScore',
        value: function drawScore() {
            var dataStore = this.dataStore;
            var button = dataStore.res.get('button');

            var SCORE = dataStore.SCORE;

            var x = button.x - button.width - button.space;
            var textX = x + button.width / 2;
            var textY = button.top + 38;

            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'draw', this).call(this, x, button.top, button.width, 55, button.radius, button.bgColor);
            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, '当前得分', textX, button.top + 15, button.titleColor, 11, 'center', 400);
            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, SCORE, textX, textY, button.color, button.fontSize);

            if (dataStore.isPlus && dataStore.plus > 0) {

                _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, '+' + dataStore.plus, textX, textY - 100 * dataStore.plusPer, button.plusColor, button.fontSize, 'center', 'bold', 1 - dataStore.plusPer);

                this.dataStore.plusPer = Math.round((this.dataStore.plusPer + 0.02) * 1000) / 1000;

                if (this.dataStore.plusPer >= 1) {
                    this.dataStore.plusPer = 0;
                    this.dataStore.isPlus = false;
                    this.dataStore.plus = 0;
                }
            }
        }
    }, {
        key: 'drawPoint',
        value: function drawPoint() {
            var x = this.dataStore.canvas.width / 2;
            var y = this.dataStore.canvas.height - 20;

            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, '温馨提示：仅支持手机端哦~~', x, y, '#bbada0', 13, 'center', '400', 1, 'Microsoft YaHei');
            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, '说明：左右滑动移动砖块，使之合并成一个', x, y - 45, '#bbada0', 14, 'center', '400', 1, 'Microsoft YaHei');
            _get(Score.prototype.__proto__ || Object.getPrototypeOf(Score.prototype), 'drawNumber', this).call(this, '努力玩到2048吧~~', x, y - 25, '#bbada0', 14, 'center', '400', 1, 'Microsoft YaHei');
        }
    }]);

    return Score;
}(_Sprite2.Sprite);
//# sourceMappingURL=Score.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Board = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DataStore = __webpack_require__(0);

var _Sprite2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 2048棋盘


var Board = exports.Board = function (_Sprite) {
    _inherits(Board, _Sprite);

    function Board() {
        _classCallCheck(this, Board);

        var board = _DataStore.DataStore.getInstance().res.get('board');

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, board.x, board.y, board.width, board.height, board.radius, board.bgColor));
    }

    _createClass(Board, [{
        key: "draw",
        value: function draw() {

            this.drawBg();

            // 绘制棋盘背景
            _get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), "draw", this).call(this);

            var dataStore = this.dataStore;
            var bgGrids = dataStore.bgGrids;
            var grids = dataStore.grids;

            // 绘制棋盘格子
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    var bgItem = bgGrids[i][j];
                    var item = grids[i][j];

                    // 绘制背景棋盘格子
                    _get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), "draw", this).call(this, bgItem.x, bgItem.y, bgItem.width, bgItem.height, bgItem.radius, bgItem.bgColor);

                    if (dataStore.isMove) {
                        if (item.isMove) {
                            this.gridMoveAnimation(item.newX, item.newY, i, j, item.oldValue);
                        }
                        continue;
                    }

                    if (item.value === 0) {
                        continue;
                    }

                    var dataColor = dataStore.res.get(item.value);
                    item.color = dataColor.color;
                    item.bgColor = dataColor.bgColor;
                    item.fontSize = dataColor.fontSize;
                    item.shadowBlur = dataColor.shadowBlur;
                    item.shadowColor = dataColor.shadowColor;

                    if (!item.new) {
                        item.scale = Math.round((item.scale + 0.1) * 100) / 100;
                        if (item.scale >= 1) {
                            item.scale = 1;
                            item.new = true;
                        }
                    }

                    if (item.isMerged) {
                        if (item.merged) {
                            item.scale = Math.round((item.scale + 0.1) * 100) / 100;
                            if (item.scale >= 1.3) {
                                item.scale = 1.3;
                                item.merged = false;
                            }
                        } else {

                            item.scale = Math.round((item.scale - 0.1) * 100) / 100;
                            if (item.scale <= 1) {
                                item.scale = 1;
                                item.isMerged = false;
                            }
                        }
                    }

                    _get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), "draw", this).call(this, bgItem.x, bgItem.y, bgItem.width, bgItem.height, bgItem.radius, item.bgColor, item.scale, 1, item.shadowBlur, item.shadowColor);
                    this.drawNumber(item.value, bgItem.x + bgItem.width / 2, bgItem.y + bgItem.height / 2, item.color, item.fontSize * item.scale);
                }
            }
        }

        // 块移动动画

    }, {
        key: "gridMoveAnimation",
        value: function gridMoveAnimation(newX, newY, x, y, value) {
            var dataStore = this.dataStore;
            var toGrid = dataStore.bgGrids[newX][newY];
            var fromGrid = dataStore.bgGrids[x][y];

            var dataColor = dataStore.res.get(value);

            var perX = Math.abs(fromGrid.x - toGrid.x) * this.dataStore.per;
            var perY = Math.abs(fromGrid.y - toGrid.y) * this.dataStore.per;

            var X = fromGrid.x >= toGrid.x ? fromGrid.x - perX : fromGrid.x + perX;
            var Y = fromGrid.y >= toGrid.y ? fromGrid.y - perY : fromGrid.y + perY;

            _get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), "draw", this).call(this, X, Y, fromGrid.width, fromGrid.height, fromGrid.radius, dataColor.bgColor, 1, 1, dataColor.shadowBlur, dataColor.shadowColor);
            this.drawNumber(value, X + fromGrid.width / 2, Y + fromGrid.height / 2, dataColor.color, dataColor.fontSize);
        }

        // 背景颜色

    }, {
        key: "drawBg",
        value: function drawBg() {
            var bgColor = this.dataStore.res.get('body').bgColor;
            var canvas = this.dataStore.canvas;

            _get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), "draw", this).call(this, 0, 0, canvas.width, canvas.height, 0, bgColor, 1);
        }
    }]);

    return Board;
}(_Sprite2.Sprite);
//# sourceMappingURL=Board.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameOver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 游戏结束


var GameOver = exports.GameOver = function (_Sprite) {
    _inherits(GameOver, _Sprite);

    function GameOver() {
        _classCallCheck(this, GameOver);

        return _possibleConstructorReturn(this, (GameOver.__proto__ || Object.getPrototypeOf(GameOver)).call(this));
    }

    _createClass(GameOver, [{
        key: 'draw',
        value: function draw() {
            var board = this.dataStore.res.get('board');
            var over = this.dataStore.res.get('over');

            _get(GameOver.prototype.__proto__ || Object.getPrototypeOf(GameOver.prototype), 'draw', this).call(this, board.x, board.y, board.width, board.height, board.radius, over.bgColor, 1, this.dataStore.overPer);
            _get(GameOver.prototype.__proto__ || Object.getPrototypeOf(GameOver.prototype), 'drawNumber', this).call(this, '游戏结束！', board.x + board.width / 2, board.y + board.width / 2 - 18, over.color, over.fontSize, 'center', 'bold', this.dataStore.overPer);

            _get(GameOver.prototype.__proto__ || Object.getPrototypeOf(GameOver.prototype), 'drawNumber', this).call(this, '当前得分：' + this.dataStore.SCORE + ' ', board.x + board.width / 2, board.y + board.width / 2 + 18, over.color, 14, 'center', '400', this.dataStore.overPer);
        }
    }]);

    return GameOver;
}(_Sprite2.Sprite);
//# sourceMappingURL=GameOver.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Main = __webpack_require__(2);

new _Main.Main(); // import './js/libs/weapp-adapter'
// import './js/libs/symbol'
//# sourceMappingURL=game.js.map

/***/ })
/******/ ]);
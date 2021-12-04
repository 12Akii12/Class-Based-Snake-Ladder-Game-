//LadderSnake Game
var Dice = /** @class */ (function () {
    function Dice(diceRandomInput) {
        this.diceRandomInput = diceRandomInput;
        this.diceRandomInput = diceRandomInput;
    }
    return Dice;
}());
var dice = new Dice(5);
var dice1 = new Dice(3);
var dice2 = new Dice(1);
var dice3 = new Dice(2);
var Ladder = /** @class */ (function () {
    function Ladder(strt_pos, end_pos) {
        this.strt_pos = strt_pos;
        this.end_pos = end_pos;
        this.strt_pos = strt_pos;
        this.end_pos = end_pos;
    }
    return Ladder;
}());
var ladder1 = new Ladder(3, 22);
var ladder2 = new Ladder(5, 8);
var ladder3 = new Ladder(11, 26);
var ladder4 = new Ladder(20, 29);
var Snake = /** @class */ (function () {
    function Snake(strt_pos, end_pos) {
        this.strt_pos = strt_pos;
        this.end_pos = end_pos;
        this.strt_pos = strt_pos;
        this.end_pos = end_pos;
    }
    return Snake;
}());
var snake1 = new Snake(17, 4);
var snake2 = new Snake(19, 7);
var snake3 = new Snake(21, 9);
var snake4 = new Snake(27, 1);
var Board = /** @class */ (function () {
    function Board(boardPosition, dice, ladder, snake, player) {
        var _this = this;
        this.boardPosition = boardPosition;
        this.dice = dice;
        this.ladder = ladder;
        this.snake = snake;
        this.player = player;
        this.ladderCheck = function () {
            _this.ladder.forEach(function (ladder) {
                if (_this.player === ladder.strt_pos) {
                    _this.player = ladder.end_pos;
                }
            });
            return _this.player;
        };
        this.snakeCheck = function () {
            _this.snake.forEach(function (snake) {
                if (_this.player === snake.strt_pos) {
                    _this.player = snake.end_pos;
                }
            });
            return _this.player;
        };
        this.playerMoves = function () {
            // for (let i = 0; i < 1; i++) {
            _this.dice.forEach(function (d) {
                _this.player += d.diceRandomInput;
                _this.ladderCheck();
                _this.snakeCheck();
                console.log(_this.ladderCheck());
            });
            // }
        };
        this.boardPosition = boardPosition;
        this.player = player;
    }
    return Board;
}());
var board1 = new Board([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30,
], [dice, dice1, dice2, dice3], [ladder1, ladder2, ladder3, ladder4], [snake1, snake2, snake3, snake4], 0);
board1.playerMoves();

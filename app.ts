//LadderSnake Game

class Dice {
  constructor(public diceRandomInput: number) {
    this.diceRandomInput = diceRandomInput;
  }
}

const dice = new Dice(5);
const dice1 = new Dice(3);
const dice2 = new Dice(1);
const dice3 = new Dice(2);

class Ladder {
  constructor(public strt_pos: number, public end_pos: number) {
    this.strt_pos = strt_pos;
    this.end_pos = end_pos;
  }
}

const ladder1 = new Ladder(3, 22);
const ladder2 = new Ladder(5, 8);
const ladder3 = new Ladder(11, 26);
const ladder4 = new Ladder(20, 29);

class Snake {
  constructor(public strt_pos: number, public end_pos: number) {
    this.strt_pos = strt_pos;
    this.end_pos = end_pos;
  }
}

const snake1 = new Snake(17, 4);
const snake2 = new Snake(19, 7);
const snake3 = new Snake(21, 9);
const snake4 = new Snake(27, 1);

class Board {
  constructor(
    public boardPosition: number[],
    public dice: Array<Dice>,
    public ladder: Array<Ladder>,
    public snake: Array<Snake>,
    public player: number
  ) {
    this.boardPosition = boardPosition;
    this.player = player;
  }

  ladderCheck = () => {
    this.ladder.forEach((ladder) => {
      if (this.player === ladder.strt_pos) {
        this.player = ladder.end_pos;
      }
    });
    return this.player;
  };

  snakeCheck = () => {
    this.snake.forEach((snake) => {
      if (this.player === snake.strt_pos) {
        this.player = snake.end_pos;
      }
    });
    return this.player;
  };

  playerMoves = () => {
    this.dice.forEach((d) => {
      this.player += d.diceRandomInput;
      this.ladderCheck();
      this.snakeCheck();
      console.log(this.ladderCheck());
    });
  };
}

const board1 = new Board(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30,
  ],
  [dice, dice1, dice2, dice3],
  [ladder1, ladder2, ladder3, ladder4],
  [snake1, snake2, snake3, snake4],
  0
);

board1.playerMoves();

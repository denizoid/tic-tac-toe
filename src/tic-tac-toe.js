class TicTacToe {
    constructor() {
       this.step = 0;
       this.field = [[null, null, null],[null, null, null],[null, null, null]];
    }

    getCurrentPlayerSymbol() {
        if (this.step % 2 == 0) {
            return 'x';
        } else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) == null)  {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.step += 1;
        } else return;
    }

    isFinished() {
      if (this.isDraw() || this.getWinner() != null) {
          return true;
      }
      return false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] == this.field[i][1] && this.field[i][2] == this.field[i][1] && this.field[i][0] != null) {
                return this.getFieldValue(i, 0);
            }
            if (this.field[0][i] == this.field[1][i] && this.field[2][i] == this.field[1][i] && this.field[0][i] != null) {
                return this.getFieldValue(0, i);
            }
        }
        if (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2] && this.field[0][0] != null) return this.getFieldValue(0,0);
        if (this.field[0][2] == this.field[1][1] && this.field[1][1]== this.field[2][0]  && this.field[1][1] != null) return this.getFieldValue(1,1);
        return null;
    }

    noMoreTurns() {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if(this.field[i].indexOf(null) == -1) {
                count++;
            }
        }
        if (count == 3) {
            return true;
        }
        return false;
        }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

import React from 'react';
import Board from './Board';
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    pawn: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xKey: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const pawn = current.pawn.slice();
        if (this.calculateWinner(pawn) || pawn[i]) {
            return;
        }
        pawn[i] = this.state.xKey ? "X" : "O";
        this.setState({
            history: history.concat([{pawn: pawn}]),
            stepNumber: history.length,
            xKey: !this.state.xKey
        });
    }
    
    calculateWinner(squares) {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
          }
      }
      return null;
  }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xKey: (step % 2) === 0,

        });
        if(step == 0){
            this.setState({
                history: [
                    {
                        pawn: Array(9).fill(null)
                    }
                ]
            });
        }

    }
    

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.pawn);

        const moves = this.state.history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xKey ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        pawn={current.pawn}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
export default Game;
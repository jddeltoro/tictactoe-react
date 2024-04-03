import "./App.css";
import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([squares]);

  const handleClick = (i) => {
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setHistory([...history, nextSquares]);
  };

  const jumpTo = (step) => {
    const newHistory = history.slice(0, step + 1);
    setHistory(newHistory);
    setSquares(newHistory[step]);
    setXIsNext(step % 2 === 0);
  }

  return (
    <>
      <div>
        <div className="status">{calculateWinner(squares) ? 'Winner: ' + calculateWinner(squares) : 'Next player: ' + (xIsNext ? 'X' : 'O')}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={()=> handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={()=> handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
        </div>
      </div>  
      <div className="game-info">
        <ol>
        {history.map((step, move) => {
          const desc = move ? 'Go to move #' + move : 'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
          );
        })}
        </ol>
      </div>    
    </>
  );
}

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick} >{value}</button>;
}

function calculateWinner(squares){
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for(let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default Board;

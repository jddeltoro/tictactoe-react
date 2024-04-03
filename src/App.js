import "./App.css";

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square({value}) {
  function handleClick() {
    alert('click');
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default Board;

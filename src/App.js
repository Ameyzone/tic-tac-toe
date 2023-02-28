import React, { useState, useEffect } from "react";
import Squarecomponent from "./Squarecomponent";
const initialState = ["","","","","","","","",""];

function App() {

const [gameState, updateGameState] = useState(initialState);

const [isXchance, updateIsXchance] = useState (false);


const onSquareClick = (index) =>{
let strings =Array.from(gameState);

strings[index] =isXchance?"X" :"O";
updateGameState(strings);
updateIsXchance(!isXchance);
}

useEffect(() => {
  let winner = checkWinner();
  if (winner) {
      setTimeout(() => { displayWinner(winner);}, 100);
  }
  
},[gameState]);

const displayWinner = (winner) => {
  alert( `Player ${winner} won the game`, { duration: 2000, title: 'Game OVer' });
  updateGameState(initialState)
}

const checkWinner = () =>{
const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
  }
}
return null;
}
  return (
    <div className="app-header">
      <p className="heading-text">Tic - Tac - Toe </p>
      <div className="row jc-center">
        <Squarecomponent className="b-bottom-right" state = {gameState[0]} onClick={()=>onSquareClick(0)} />
        <Squarecomponent className="b-bottom-right" state = {gameState[1]} onClick={()=>onSquareClick(1)}/>
        <Squarecomponent  className="b-bottom "state = {gameState[2]} onClick={()=>onSquareClick(2)}/>
      </div >
      <div className="row jc-center">
      <Squarecomponent className="b-bottom-right" state = {gameState[3]} onClick={()=>onSquareClick(3)}/>
      <Squarecomponent className="b-bottom-right" state = {gameState[4]} onClick={()=>onSquareClick(4)}/>
        <Squarecomponent className="b-bottom "  state = {gameState[5]} onClick={()=>onSquareClick(5)}/>
      </div>
      <div className="row jc-center">
      <Squarecomponent className="b-right" state = {gameState[6]} onClick={()=>onSquareClick(6)}/>
      <Squarecomponent className="b-right" state = {gameState[7]} onClick={()=>onSquareClick(7)}/>
        <Squarecomponent state = {gameState[8]} onClick={()=>onSquareClick(8)}/>
      </div>
<button className="class-button" onClick={() => updateGameState(initialState)} > Clear </button>

    </div>
  );
}

export default App;

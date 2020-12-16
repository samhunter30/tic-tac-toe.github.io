import React, {useState} from 'react';
import {calculateWinner} from '../helpers';
import Board from './Board';
import Button from '@material-ui/core/Button';

const style = {
    width: '290px',
    margin: '20px auto',
    textAlign: 'left',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const xo = xIsNext ? 'X' : 'O';

    const handleClick = i => {
        const boardCopy = [...board];

        //here we check if the space we clicked is empty or not        
        if(winner || boardCopy[i]) return;

        //here we put O or X in a Blank space
        boardCopy[i] = xo;
        setBoard(boardCopy);
        setXisNext(!xIsNext); 
        }   

    //The button to replay the game
    const renderMoves = () => {
        if (winner) {
            return <Button variant="contained" color="primary" onClick={() => setBoard( Array(9).fill(null) )}>
             Replay Game
            </Button>
        }
    }

    //here we see if we have a winner or draw or none
    let status;    
    if (winner) {
        if (winner === 'draw'){
        status = 'Match resulted in a draw';}
        else {
        status = 'The winner is ' + winner;}
    } else {
        status = 'Next player is ' + (xIsNext ? 'X' : 'O');}
   
    //Showcase
    return (
        <>
        <div style={{fontFamily: 'Arial' , fontWeight: 'bold' , textAlign: 'center'}}>
            <h1>Tic Tac Toe Game</h1>
            <h3>With React</h3>
            <h6>By Saeed Sayad</h6>
        </div>
            <Board squares={board} onClick={handleClick} />
                <div style={style}>
                    <p style={{fontFamily: 'Arial' , fontWeight: 'bold'}}> {status} </p>
                    {renderMoves()}
                </div>
        </>
    )
}

export default Game;
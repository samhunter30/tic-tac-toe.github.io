import React, {useState} from 'react';
import {calculateWinner} from '../helpers';
import Board from './Board';
import Button from '@material-ui/core/Button';

const style = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        //here we check if the space we clicked is empty or not        
        if(winner || boardCopy[i]) return;
        //here we put O or X in a Blank space
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <Button variant="contained" color="primary" onClick={() => setBoard( Array(9).fill(null) )}>
            Start Game
        </Button>
    )

    return (
        <>
            <Board squares={board} onClick={handleClick} />
                <div style={style}>
                    <p> {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')} </p>
                    {renderMoves()}
                </div>
        </>
    )
}

export default Game;
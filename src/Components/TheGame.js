import { useState } from "react";
import Score from "./Score";
let sqArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const TheGame = () => {
    let [xo, setXO] = useState('close')
    let iconSpan = `<span class="material-symbols-outlined">${xo}</span>`;
    let [gameover, setGameOver] = useState(0);
    let [Turn, setTurn] = useState('X')
    let [winner, setwinner] = useState('')
    let divArr = document.querySelectorAll('.tic-tac>div');
    function reset() {
        divArr.forEach((d) => d.innerHTML = '')
        setGameOver(0)
        setTurn('X');
        setXO('close')
        setwinner('');
    }
    function checkWinner() {
        if (
            divArr[0] != undefined && ((divArr[0]).innerHTML).includes('close') &&
            divArr[1] != undefined && ((divArr[1]).innerHTML).includes('close') &&
            divArr[2] != undefined && ((divArr[2]).innerHTML).includes('close')
        ) {
            setwinner('Player 1');
        }
        else if (divArr[0] != undefined && ((divArr[0]).innerHTML).includes('circle') &&
            divArr[1] != undefined && ((divArr[1]).innerHTML).includes('circle') &&
            divArr[2] != undefined && ((divArr[2]).innerHTML).includes('circle')) {
            setwinner('Player 2')
        }
        else if (divArr[3] != undefined && ((divArr[3]).innerHTML).includes('close') &&
            divArr[4] != undefined && ((divArr[4]).innerHTML).includes('close') &&
            divArr[5] != undefined && ((divArr[5]).innerHTML).includes('close')) {
            setwinner('Player 1')
        }
        else if (divArr[3] != undefined && ((divArr[3]).innerHTML).includes('circle') &&
            divArr[4] != undefined && ((divArr[4]).innerHTML).includes('circle') &&
            divArr[5] != undefined && ((divArr[5]).innerHTML).includes('circle')) {
            setwinner('Player 2')
        }
        else if (divArr[6] != undefined && ((divArr[6]).innerHTML).includes('close') &&
            divArr[7] != undefined && ((divArr[7]).innerHTML).includes('close') &&
            divArr[8] != undefined && ((divArr[8]).innerHTML).includes('close')) {
            setwinner('Player 1')
        }
        else if (divArr[6] != undefined && ((divArr[6]).innerHTML).includes('circle') &&
            divArr[7] != undefined && ((divArr[7]).innerHTML).includes('circle') &&
            divArr[8] != undefined && ((divArr[8]).innerHTML).includes('circle')) {
            setwinner('Player 2')
        }
        else if (divArr[0] != undefined && ((divArr[0]).innerHTML).includes('close') &&
            divArr[4] != undefined && ((divArr[4]).innerHTML).includes('close') &&
            divArr[8] != undefined && ((divArr[8]).innerHTML).includes('close')) {
            setwinner('Player 1')
        }
        else if (divArr[0] != undefined && ((divArr[0]).innerHTML).includes('circle') &&
            divArr[4] != undefined && ((divArr[4]).innerHTML).includes('circle') &&
            divArr[8] != undefined && ((divArr[8]).innerHTML).includes('circle')) {
            setwinner('Player 2')
        }
        else if (divArr[2] != undefined && ((divArr[2]).innerHTML).includes('close') &&
            divArr[4] != undefined && ((divArr[4]).innerHTML).includes('close') &&
            divArr[6] != undefined && ((divArr[6]).innerHTML).includes('close')) {
            setwinner('Player 1')
        }
        else if (divArr[2] != undefined && ((divArr[2]).innerHTML).includes('circle') &&
            divArr[4] != undefined && ((divArr[4]).innerHTML).includes('circle') &&
            divArr[6] != undefined && ((divArr[6]).innerHTML).includes('circle')) {
            setwinner('Player 2')
        }
        else if (divArr[0] != undefined && ((divArr[0]).innerHTML).includes('close') &&
            divArr[3] != undefined && ((divArr[3]).innerHTML).includes('close') &&
            divArr[6] != undefined && ((divArr[6]).innerHTML).includes('close')) {
            setwinner('Player 1')
        }
        else if (divArr[0] != undefined && ((divArr[0]).innerHTML).includes('circle') &&
            divArr[3] != undefined && ((divArr[3]).innerHTML).includes('circle') &&
            divArr[6] != undefined && ((divArr[6]).innerHTML).includes('circle')) {
            setwinner('Player 2')
        }
        else if (divArr[1] != undefined && ((divArr[1]).innerHTML).includes('close') &&
            divArr[4] != undefined && ((divArr[4]).innerHTML).includes('close') &&
            divArr[7] != undefined && ((divArr[7]).innerHTML).includes('close')) {
            setwinner('Player 1')
        }
        else if (divArr[1] != undefined && ((divArr[1]).innerHTML).includes('circle') &&
            divArr[4] != undefined && ((divArr[4]).innerHTML).includes('circle') &&
            divArr[7] != undefined && ((divArr[7]).innerHTML).includes('circle')) {
            setwinner('Player 2')
        }
        else if (divArr[2] != undefined && ((divArr[2]).innerHTML).includes('close') &&
            divArr[5] != undefined && ((divArr[5]).innerHTML).includes('close') &&
            divArr[8] != undefined && ((divArr[8]).innerHTML).includes('close')) {
            setwinner('Player 1')
        }
        else if (divArr[2] != undefined && ((divArr[2]).innerHTML).includes('circle') &&
            divArr[5] != undefined && ((divArr[5]).innerHTML).includes('circle') &&
            divArr[8] != undefined && ((divArr[8]).innerHTML).includes('circle')) {
            setwinner('Player 2')
        }
    }

    function setIcon(element) {
        if (xo === 'circle') {
            element.innerHTML = `${iconSpan}`
            setXO('close')
            setTurn('X')
            setGameOver(gameover + 1)
        }
        else {
            element.innerHTML = `${iconSpan}`
            setXO('circle')
            setTurn('O')
            setGameOver(gameover + 1)
        }
        checkWinner();
    }
    return (
        <div className="theGame">
            <div>
                <div className="config">
                    <h3 style={{ color: 'white' }}>Turn : {Turn}</h3>
                    {
                        (gameover === 9 && winner != '') && (
                            <div>
                                <h4 style={{ color: 'red', textAlign: 'center' }}>Game Over !</h4>
                                <h4 style={{ color: 'green' }}>Please Click Reset Button to start again </h4>
                            </div>
                        )
                    }
                    <button onClick={reset} className="newRound-btn">New Round</button>
                </div>
                <div className="tic-tac">
                    {
                        sqArray.map((e) => (
                            <div onClick={(event) => {
                                setIcon(event.target)
                            }}></div>
                        ))
                    }
                </div>
            </div>
            <div>
                <Score
                    winner={winner}
                ></Score>
                <button onClick={reset} className="reset-btn">Reset</button>
                <button onClick={()=>{window.location.reload();}} className="start-new-game-btn">Start New Game</button>
            </div>
        </div>
    )
}
export default TheGame;
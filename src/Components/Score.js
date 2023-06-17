let p1Score = 0;
let p2Score = 0;
const Score = ({ winner }) => {
    if (winner == 'Player 1') {
        p1Score += 5;
        document.getElementById('p1').value = p1Score;

    } else if (winner == 'Player 2') {
        p2Score += 5;
        document.getElementById('p2').value = p2Score;
    }
    return (
        <div className="score-container">
            {
                (winner !== '') && (
                    <div className="congo">
                        <p>Congratulations
                            <span class="material-symbols-outlined">celebration</span>
                            <span class="material-symbols-outlined">celebration</span>
                            <span class="material-symbols-outlined">celebration</span>
                        </p>
                        <h3>The Winner is : {winner}</h3>
                    </div>
                )
            }
            <div>
                <p>Player 1 : X</p>
                <input type="text" id="p1" disabled />
            </div>
            <div>
                <p>Player 2 : O</p>
                <input type="text" id="p2" disabled />
            </div>
        </div>
    )
}

export default Score
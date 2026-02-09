function ScoreBoard({score}) {
    return (
        <div className="scoreBoard">
            <h3>Score:</h3>
            <p>
                {score}
            </p>
        </div>
    )
}

export {ScoreBoard}
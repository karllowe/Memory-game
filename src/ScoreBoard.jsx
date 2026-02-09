function ScoreBoard({score, selectedPokemonArray}) {
    return (
        <div className="scoreBoard">
            <h3>Score:</h3>
            <p>
                {score}
            </p>
            <p>{selectedPokemonArray}</p>
        </div>
    )
}

export {ScoreBoard}
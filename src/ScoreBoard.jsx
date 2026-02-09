function ScoreBoard({score, firstSelectedPokemon, secondSelectedPokemon}) {
    return (
        <div className="scoreBoard">
            <h3>Score:</h3>
            <p>
                {score}
            </p>
            <p>first: {firstSelectedPokemon} second:{secondSelectedPokemon}</p>
        </div>
    )
}

export {ScoreBoard}
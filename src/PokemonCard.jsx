import "/src/styles/pokemonCard.css";

function PokemonCard({pokemon, resetGame, score, setScore, selectedPokemonArray, setSelectedPokemonArray}) {
    return (
        <div 
            className="cardWrapper" 
            role="button" 
            onClick={() => {
                if (selectedPokemonArray.includes(pokemon.id)) {
                    resetGame()
                } else {
                    setSelectedPokemonArray([...selectedPokemonArray, pokemon.id]);
                    setScore(score + 1)
                }
            }}
        >
            <div className="pokemonCard">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.imageUrl} alt="" />
            </div>
        </div>
    )
}

export {PokemonCard}
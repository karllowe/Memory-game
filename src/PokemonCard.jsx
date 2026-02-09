import "/src/styles/pokemonCard.css";

function PokemonCard({pokemon, firstSelectedPokemon, setFirstSelectedPokemon, setSecondSelectedPokemon, resetGame, score, setScore}) {
    return (
        <div 
            className="cardWrapper" 
            role="button" 
            onClick={() => {
                if (firstSelectedPokemon.length<1) {
                    setFirstSelectedPokemon(pokemon.id)
                } else {
                    setSecondSelectedPokemon(pokemon.id);
                    if (firstSelectedPokemon == pokemon.id) {
                        resetGame()
                    } else {
                        setScore(score+1)
                    }
                };
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
import "/src/styles/pokemonCard.css";

function PokemonCard({pokemon}) {
    return (
        <div className="cardWrapper">
            <div className="pokemonCard" role="button">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.imageUrl} alt="" />
            </div>
        </div>
    )
}

export {PokemonCard}
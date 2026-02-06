// import { useState } from "react";
import "/src/styles/imageGrid.css";

function ImageGrid({pokemonArray}) {

    return (
        <div className="imageGrid">
            {
                pokemonArray.map((item) => (
                    <div key={item.id} className="pokemonCard">
                        <PokemonCard pokemon={item}/>
                    </div>
                ))
            }
        </div>
    )
}

function PokemonCard({pokemon}) {
    return (
        <div className="pokemonCard">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.imageUrl} alt="" />
        </div>
    )
}

export {ImageGrid}
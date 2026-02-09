// import { useState } from "react";
import "/src/styles/imageGrid.css";
import { PokemonCard } from "./PokemonCard";

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

export {ImageGrid}
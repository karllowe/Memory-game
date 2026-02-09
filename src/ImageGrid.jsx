// import { useState } from "react";
import "/src/styles/imageGrid.css";
import { PokemonCard } from "./PokemonCard";

function ImageGrid({pokemonArray, score, setScore, resetGame, selectedPokemonArray, setSelectedPokemonArray, shufflePokemonArray}) {

    return (
        <div className="imageGrid">
            {
                pokemonArray.map((item) => (
                    <PokemonCard key={item.id} pokemon={item} score={score} setScore={setScore} resetGame={resetGame} selectedPokemonArray={selectedPokemonArray} setSelectedPokemonArray={setSelectedPokemonArray} shufflePokemonArray={shufflePokemonArray}/>
                ))
            }
        </div>
    )
}

export {ImageGrid}
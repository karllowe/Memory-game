// import { useState } from "react";
import "/src/styles/imageGrid.css";
import { PokemonCard } from "./PokemonCard";

function ImageGrid({pokemonArray, firstSelectedPokemon, setFirstSelectedPokemon, secondSelectedPokemon, setSecondSelectedPokemon, score, setScore, resetGame}) {

    return (
        <div className="imageGrid">
            {
                pokemonArray.map((item) => (
                    <div key={item.id} className="pokemonCard">
                        <PokemonCard pokemon={item} firstSelectedPokemon={firstSelectedPokemon} setFirstSelectedPokemon={setFirstSelectedPokemon} secondSelectedPokemon={secondSelectedPokemon} setSecondSelectedPokemon={setSecondSelectedPokemon} score={score} setScore={setScore} resetGame={resetGame}/>
                    </div>
                ))
            }
        </div>
    )
}

export {ImageGrid}
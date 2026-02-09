// import { useState } from "react";
import "/src/styles/imageGrid.css";
import { PokemonCard } from "./PokemonCard";
import {motion} from "framer-motion";

function ImageGrid({pokemonArray, score, setScore, resetGame, selectedPokemonArray, setSelectedPokemonArray, shufflePokemonArray}) {

    return (
        <div className="imageGrid">
            {
                pokemonArray.map((item) => (
                    <motion.div key={item.id} layout transition={{duration: 0.5, ease: "easeInOut"}}>
                    <PokemonCard key={item.id} pokemon={item} score={score} setScore={setScore} resetGame={resetGame} selectedPokemonArray={selectedPokemonArray} setSelectedPokemonArray={setSelectedPokemonArray} shufflePokemonArray={shufflePokemonArray}/>
                    </motion.div>
                ))
            }
        </div>
    )
}

export {ImageGrid}
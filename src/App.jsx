import { useState, useEffect} from 'react'
import './App.css'
import { ImageGrid } from './ImageGrid';
import { RandomSort } from './HelpFunctions';
import { ScoreBoard } from './ScoreBoard';

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedPokemonArray, setSelectedPokemonArray] = useState([]);
  const maxCards = 5;

  function resetGame() {
    setScore(0);
    setSelectedPokemonArray([]);
    fetchNewPokemon()
  }

  function shufflePokemonArray() {
    const shuffledArray = RandomSort(pokemonArray);
    setPokemonArray(shuffledArray)
  }

  const fetchNewPokemon = async () => {
    try {
      const apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon?&offset=0");
      const jsonData = await apiReturn.json();

      const getOnePokemon = async (url) => {
        try {
          const data = await fetch(url);
          const jsonData = await data.json();
          const newPokemon = new Pokemon(jsonData.species.name, jsonData.sprites ? jsonData.sprites.other["official-artwork"]["front_default"]: null);
          return newPokemon;
        } catch (error) {
          throw new Error ("Couldn't get individual pokemon: " + error)
        }
      }

      const shuffledJsonData = RandomSort(jsonData.results);
      const limitedArray = shuffledJsonData.slice(0,maxCards);

      const augmentedPokemonArray = await Promise.all(
        limitedArray.map((item) => getOnePokemon(item.url))
      );

      setPokemonArray(augmentedPokemonArray);

    } catch (error) {
      throw new Error("API responce error: " + error)
    }
  };

  useEffect(() => {
    (async () => {
      await fetchNewPokemon();
    })();
  }, []);

  return (
    <>
    <ScoreBoard score={score} setScore={setScore} selectedPokemonArray={selectedPokemonArray}/>
    <ImageGrid pokemonArray = {pokemonArray} setScore={setScore} score={score} resetGame={resetGame} selectedPokemonArray={selectedPokemonArray} setSelectedPokemonArray={setSelectedPokemonArray} shufflePokemonArray={shufflePokemonArray}/>
    </>
  )
}

class Pokemon {
  constructor(name, imageUrl) {
    this.name=name;
    this.imageUrl=imageUrl;
    this.id = crypto.randomUUID();
  }
}

export default App

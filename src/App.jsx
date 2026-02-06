import { useState, useEffect} from 'react'
import './App.css'
import { ImageGrid } from './ImageGrid';

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
        const jsonData = await apiReturn.json();

        const getOnePokemon = async (url) => {
          try {
            const data = await fetch(url);
            const jsonData = await data.json();
            const newPokemon = new Pokemon(jsonData.species.name, jsonData.sprites.other["official-artwork"]["front_default"]);
            return newPokemon;
          } catch (error) {
            throw new Error ("Couldn't get individual pokemon: " + error)
          }
        }
        const augmentedPokemonArray = await Promise.all(
          jsonData.results.map((item) => getOnePokemon(item.url))
        );

        setPokemonArray(augmentedPokemonArray);

      } catch (error) {
        throw new Error("API responce error: " + error)
      }
    })();
  }, []);

  return (
    <>
    <ImageGrid pokemonArray = {pokemonArray}/>
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

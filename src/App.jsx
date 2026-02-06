import { useState, useEffect} from 'react'

import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        const apiReturn = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        const jsonData = await apiReturn.json();
        setPokemon(jsonData)
      } catch (error) {
        throw new Error("API responce error: " + error)
      }
    })();
    console.log(pokemon)
  })

  return (
    <>
    </>
  )
}

export default App

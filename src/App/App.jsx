import { useEffect, useState } from 'react'
import './App.css'
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Footer from '../Components/Footer/Footer';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [desde, setDesde] = useState(0);
  const hasta = 12;
  const [pokemonAside, setPokemonAside] = useState('bulbasaur');
  const [infoPokeAside, setInfoPokeAside] = useState([])


  const obtener12Pokemons = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${hasta}&offset=${desde}`)
    .then(respuesta => respuesta.json())
    .then(resultado => setPokemons(resultado.results))
  }

  const seleccionarPokemonAside = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAside}`)
    .then(respuesta => respuesta.json())
    .then(resultado => setInfoPokeAside(resultado))
  }

  // Obtener primeros 12 Pokemons
  useEffect(()=>{
    obtener12Pokemons()
  }, [desde])

  // Obtener Pokemon para mostrar en el Aside
  useEffect(()=>{
    seleccionarPokemonAside()
  },[pokemonAside])
  return (
    <div className='layout'>
      <Header setPokemonAside={setPokemonAside}/>

      <Main setDesde={setDesde} desde={desde} pokemons={pokemons} setPokemonAside={setPokemonAside} infoPokeAside={infoPokeAside}/>

      <Footer/>
    </div>
  )
}

export default App

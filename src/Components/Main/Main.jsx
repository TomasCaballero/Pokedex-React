import './Main.css'
import Aside from "../Aside/Aside"
import CardsContainer from "../CardsContainer/CardsContainer"
import PageControl from "../PageControl/PageControl"
import Spinner from '../Spinner/Spinner'
import PropTypes from 'prop-types'
import {  useState } from 'react'

const Main = ({setDesde, desde, pokemons, setPokemonAside, infoPokeAside}) => {
    const [load, setLoad] = useState(false)


    return (
        <main>
            <section>
                <PageControl setDesde={setDesde} desde={desde} setLoad={setLoad} load={load}/>
                <div className="contain">
                    {
                        load == true ? <Spinner/> : <CardsContainer pokemons={pokemons} setPokemonAside={setPokemonAside}/>
                    }
                </div>
            </section>
            <Aside infoPokeAside={infoPokeAside}/>
        </main>
    )
}

export default Main

Main.propTypes= {
    setDesde: PropTypes.func.isRequired,
    desde: PropTypes.number.isRequired,
    pokemons: PropTypes.array.isRequired,
    setPokemonAside: PropTypes.func.isRequired,
    infoPokeAside: PropTypes.array.isRequired
}
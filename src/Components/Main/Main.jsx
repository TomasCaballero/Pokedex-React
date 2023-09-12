import './Main.css'
import Aside from "../Aside/Aside"
import CardsContainer from "../CardsContainer/CardsContainer"
import PageControl from "../PageControl/PageControl"
import PropTypes from 'prop-types'

const Main = ({setDesde, desde, pokemons, setPokemonAside, infoPokeAside}) => {
    return (
        <main>
            <section>
                <PageControl setDesde={setDesde} desde={desde}/>
                <CardsContainer pokemons={pokemons} setPokemonAside={setPokemonAside}/>
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

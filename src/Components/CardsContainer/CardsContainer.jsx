import './CardsContainer.css'
import PropTypes from 'prop-types'
import Pokemon from '../Pokemon/Pokemon'


const CardsContainer = ({pokemons, setPokemonAside}) => {
    return (
        <div className="cardsContainer">
            {
                pokemons.map((pokemon) => {
                    return (
                        <Pokemon key={pokemon.name} url={pokemon.url} setPokemonAside={setPokemonAside}/>
                    )
                })
            }
        </div>
    )
}

export default CardsContainer

CardsContainer.propTypes= {
    setDesde: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
    setPokemonAside: PropTypes.func.isRequired,
    infoPokeAside: PropTypes.object.isRequired
}
import './Pokemon.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Pokemon = ({ url, setPokemonAside }) => {
    const [info, setInfo] = useState('');
    // console.log(info)

    const verInfo = () => {
        setPokemonAside(info.name)
    };

    const obtenerInfoPokemon = () => {
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((resultado) => setInfo(resultado))
            .catch((error) => {
                console.error('Error al obtener la información del Pokémon:', error);
            });
    };

    useEffect(() => {
        obtenerInfoPokemon();
    }, [url]);

    return (
        <div >
            {info && info.sprites && info.sprites.versions && info.sprites.versions['generation-v'] && info.sprites.front_default && (
                <div className="card" onClick={verInfo}>
                    {/* <img src={info.sprites.other.home.front_default} alt="Pokemon" className='imgRara'></img> */}
                    {/* <img src={info.sprites.front_default} alt="Pokemon" className='imgRara'></img> */}
                    <img src={info.sprites.versions['generation-v']['black-white'].animated.front_default ? info.sprites.versions['generation-v']['black-white'].animated.front_default : info.sprites.front_default} alt="Pokemon"></img>
                    <h3>{info.name.toUpperCase()}</h3>
                </div>
            )}
        </div>
    );
};

export default Pokemon;

Pokemon.propTypes = {
    setPokemonAside: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
};

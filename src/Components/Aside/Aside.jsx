// import { useState } from 'react'
import './Aside.css'
import PropTypes from 'prop-types'


const Aside = ({ infoPokeAside }) => {
    const arrayTypes = infoPokeAside.types;
    const arrayAbilities = infoPokeAside.abilities;
    const arrayStats = infoPokeAside.stats;
    // let gifPoke = infoPokeAside.sprites.versions['generation-v']['black-white'].animated.front_default;
    // let imgPoke = infoPokeAside.sprites.front_default;
    // console.log(gifPoke)
    // console.log(imgPoke)


    return (
        <aside className='aside'>
            {infoPokeAside && infoPokeAside.sprites && infoPokeAside.sprites.versions && infoPokeAside.sprites.versions['generation-v'] && infoPokeAside.sprites.front_default && (
                <div className="cardPokemon">
                    <div className="red">
                        <h3 className='name'>{infoPokeAside.name.toUpperCase()}</h3>
                        <h3 className='id'>#{infoPokeAside.id}</h3>
                    </div>
                    <img src={infoPokeAside.sprites.versions['generation-v']['black-white'].animated.front_default ? infoPokeAside.sprites.versions['generation-v']['black-white'].animated.front_default : infoPokeAside.sprites.front_default} alt="Pokemon"></img>
                    <div className='white'>
                        <div className="contenidoWhite">
                            <div className="caracteristicas">
                                <p><strong>Height:</strong> {(infoPokeAside.height * 10) / 100}m</p>
                                <p><strong>Weight:</strong> {(infoPokeAside.weight * 10) / 100}Kg</p>
                            </div>

                            <div className="types">
                                {
                                    arrayTypes.map((type) => {
                                        return (
                                            <p key={type.type.name} className={type.type.name}><strong>{type.type.name.toUpperCase()}</strong></p>
                                        )
                                    })
                                }
                            </div>
                            <div className='types'>
                                {
                                    arrayAbilities.map((abilities)=>{
                                        return(
                                            <p key={abilities.ability.name} className='habilidad'><strong>{abilities.ability.name.toUpperCase()}</strong></p>
                                        )
                                    })
                                }
                            </div>
                            <div className='stats'>
                                {
                                    arrayStats.map((stats)=>{
                                        return(
                                            <div key={stats.stat.name} className='statContainer'>
                                                <p className='stats'><strong>{stats.stat.name.toUpperCase()} <span>{stats.base_stat}</span></strong></p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    )
}

export default Aside
Aside.propTypes = {
    infoPokeAside: PropTypes.object.isRequired
}
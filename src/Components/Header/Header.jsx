import './Header.css'
import PropTypes from 'prop-types'

const Header = ({setPokemonAside}) => {
    const buscarPorNombre = (e) =>{
        e.preventDefault();
        let nombre = e.target.name.value;
        setPokemonAside(nombre.toLowerCase())
    }

    return (
        <header>
            <div>
                {/* <img src="https://apprecs.org/ios/images/app-icons/256/9d/1135641245.jpg" alt="" /> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt="" />
                <h1>Pokedex</h1>
            </div>
            
            <form onSubmit={buscarPorNombre}>
                <input type="text" name="name" id="name" className='name' placeholder='Nombre o ID del Pokemon' />
                <input type="submit" value="Buscar" />
            </form>
        </header>
    )
}

export default Header

Header.propTypes= {
    setPokemonAside: PropTypes.func.isRequired
}
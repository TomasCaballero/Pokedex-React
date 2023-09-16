import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footerSup">
                <img src="src/assets/bg/imgFooter.png" alt="" />
                <div className="contacto">
                    <div className="titulo">Contacto:</div>
                    <ul>
                        <li><a href="https://github.com/TomasCaballero"><box-icon name='github' type='logo' color='#ffffff' size='sm'></box-icon> TomasCaballero</a></li>
                        <li><a href="https://www.linkedin.com/in/tomás-bautista-caballero/"><box-icon type='logo' color='#ffffff' name='linkedin-square' size='sm'></box-icon> Tomás Bautista Caballero</a></li>
                        <li><a href="https://tomas-caballero.com.ar"><box-icon name='world' color='#ffffff' size='sm'></box-icon> tomas-caballero.com.ar</a></li>
                        <li><a href="https://www.instagram.com/tomicaballero/"><box-icon name='instagram-alt' type='logo' color='#ffffff' size='sm'></box-icon> tomicaballero</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerInf">
                <p>&copy; Tomás Bautista Caballero</p>
            </div>
        </footer>
    )
}

export default Footer
import './PageControl.css'
import PropTypes from 'prop-types'


const PageControl = ({setDesde, desde}) => {
    const next =()=>{
        setDesde(desde + 12)
    }
    const prev = () =>{
        if(desde > 0){
            setDesde(desde - 12)
        }
    }

    return (
        <div className="pageControl">
            <button onClick={prev}>&lt;</button>
            <button onClick={next}>&gt;</button>
        </div>
    )
}

export default PageControl

PageControl.propTypes= {
    setDesde: PropTypes.func.isRequired,
    desde: PropTypes.number.isRequired

}
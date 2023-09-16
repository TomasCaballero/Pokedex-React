import './PageControl.css'
import PropTypes from 'prop-types'


const PageControl = ({setDesde, desde, load, setLoad}) => {
    const next = ()=>{
        setDesde(desde + 12)
        if(load == false){
            setLoad(true)
            setTimeout(()=>{
                setLoad(false)
            },2000)
        }
    }
    const prev = () =>{
        if(desde > 0){
            setDesde(desde - 12)
        }
        if(load == false){
            setLoad(true)
            setTimeout(()=>{
                setLoad(false)
            },1000)
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
    desde: PropTypes.number.isRequired,
    setLoad: PropTypes.func.isRequired,
    load: PropTypes.bool.isRequired

}
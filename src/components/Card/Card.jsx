/* eslint-disable react/prop-types */
import './Card.scss'

const Card = ({imagen, nombre, bodega, varietal, precio}) => {
    return(
        <>
            <div className="tarjeta">
                <div className="imagen__container">
                    <img src={imagen} alt={nombre}/>
                </div>
                <div className="info">
                    <h5 className="card-title">{nombre}</h5>
                    <p>{bodega}</p>
                    <p>{varietal}</p>
                </div>
                <div className="accion">
                    <p className="card-text">${precio}</p>
                    <a href="#" className="btn btn-primary">Agregar</a>
                </div>
            </div>
            
        </>
    )
}

export default Card
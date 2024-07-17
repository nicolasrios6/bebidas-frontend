import './Card.scss'

const Card = ({imagen, nombre, bodega, varietal, precio}) => {
    return(
        <>
            <div className="tarjeta">
                <div className="imagen">
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
            {/* <div className="card" style={{width: '300px', display:'flex', justifyContent:'center'}}>
                <img src={imagen} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{bodega}</p>
                    <p className="card-text">{varietal}</p>
                    <p className="card-text">${precio}</p>
                    <a href="#" className="btn btn-primary">Agregar</a>
                </div>
            </div> */}
        </>
    )
}

export default Card
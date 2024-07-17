import { useEffect, useState } from "react"
import Banner from "../Banner/Banner"
import Card from "../Card/Card"
import api from "../../services/api"
import { getProductos, getProductosByCategoria } from "../../services/productsServices"
import './Inicio.scss'


const Inicio = () => {
    const [productos, setProductos] = useState([])
    const [categoria, setCategoria] = useState('Todos')

    useEffect(() => {
        listarProductosPorCategoria(categoria)
    }, [categoria])

    const listarProductosPorCategoria = async (categoria) => {
        if(categoria === 'Todos') {
            const data = await getProductos()
            setProductos(data)
        } else {
            const data = await getProductosByCategoria(categoria)
            setProductos(data)
        }
    }

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value)
    }
    return (
        <>
            {/* <Banner /> */}
            <div className="container-lg">
                <h3 className="titulo">Catálogo:</h3>
                <select className="form-select" aria-label="Default select example" onChange={handleCategoriaChange} value={categoria} style={{width:'150px'}}>
                    <option defaultValue>Todos</option>
                    <option value="Vinos">Vinos</option>
                    <option value="Spirits">Spirits</option>
                    <option value="Whiskies">Whiskies</option>
                </select>
                <div className="container">
                    <div className="row">
                        {
                            productos.map((producto) => {
                                return(
                                    <div className="col">  
                                        <Card
                                            key={producto.id}
                                            nombre={producto.nombre}
                                            imagen={`http://localhost:8080/uploads/${producto.imagen}`}
                                            bodega={producto.bodega}
                                            varietal={producto.varietal}
                                            precio={producto.precio}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio
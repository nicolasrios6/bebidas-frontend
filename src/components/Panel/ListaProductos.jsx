import { useEffect, useState } from "react"
import { createProducto, deleteProducto, getProductos, getProductosByCategoria, updateProducto } from "../../services/productsServices"
import FormularioProducto from "./FormularioProducto"

const ListaProductos = () => {
    const [productos, setProductos] = useState([])
    const [categoria, setCategoria] = useState('Todos') //Estado para la categoria seleccionada
    const [showForm, setShowForm] = useState(false)
    const [editingProducto, setEditingProducto] = useState(null)

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

    const handleCreate = () => {
        setEditingProducto(null)
        setShowForm(true)
    }

    const handleEdit = (producto) => {
        setEditingProducto(producto)
        setShowForm(true)
    }

    const handleSave = async (id, formData) => {
        if (id) { // Verifica si el ID está presente en el FormData
            await updateProducto(id, formData);
        } else {
            await createProducto(formData);
        }
        setShowForm(false);
        listarProductosPorCategoria(categoria);
    };

    const handleCancel = () => {
        setShowForm(false)
    }


    const handleEliminarProducto = async (id) => {
        await deleteProducto(id)
        setProductos(productos.filter(p => p.id !== id))
    }



    return(
        <>
            <h2>Lista de Productos:</h2>
            <select className="form-select" aria-label="Default select example" onChange={handleCategoriaChange} value={categoria}>
                <option defaultValue>Todos</option>
                <option value="Vinos">Vinos</option>
                <option value="Spirits">Spirits</option>
                <option value="Whiskies">Whiskies</option>
            </select>
            <button onClick={handleCreate}>Crear Producto</button>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Varietal</th>
                    <th scope="col">Bodega</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto) => {
                            return(
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.varietal}</td>
                                    <td>{producto.bodega}</td>
                                    <td>${producto.precio}</td>
                                    <td>{producto.categoria}</td>
                                    <td>
                                        <img src={producto.imagenUrl} alt={producto.nombre} style={{width:'100px'}}/>
                                    </td>
                                    <td>
                                        <button onClick={() => handleEdit(producto)}>Editar</button>
                                        <button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                showForm && (
                    <FormularioProducto
                        producto={editingProducto}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                )
            }
        </>
    )
}

export default ListaProductos
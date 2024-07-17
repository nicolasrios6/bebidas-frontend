import api from "./api"

export const getProductos = async () => {
    try {
        const response = await api.get("/productos")
        return response.data
    } catch (error) {
        console.error("Error al traer los productos.", error)
        return []
    }
}

export const getProductoById = async (id) => {
    try{
        const response = await api.get(`/productos/${id}`)
        return response.data
    } catch (error) {
        console.error("Error al traer productos por id.", error)
        return []
    }
}

export const getProductosByCategoria = async (categoria) => {
    try {
        const response = await api.get(`/productos/categoria/${categoria}`)
        return response.data
    } catch (error) {
        console.error("Error al traer productos por categoria.", error)
        return []
    }
}

export const createProducto = async (formData) => {
    try {
        const response = await api.post("/productos", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error al crear el producto:", error)
        throw error
    }
};

export const updateProducto = async (id, formData) => {
    try {
        const response = await api.put(`/productos/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error al actualizar producto.", error);
        throw error; 
    }
}


export const deleteProducto = async (id) => {
    try {
        await api.delete(`/productos/${id}`)
        return true
    } catch(error) {
        console.error("Error al eliminar producto.", error)
        return false
    }
}
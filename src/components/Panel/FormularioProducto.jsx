/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const FormularioProducto = ({producto, onSave, onCancel }) => {
    const [formState, setFormState] = useState({
        id: producto ? producto.id : "",
        nombre: producto ? producto.nombre : "",
        precio: producto ? producto.precio : "",
        bodega: producto ? producto.bodega : "",
        varietal: producto ? producto.varietal : "",
        categoria: producto ? producto.categoria : "",
        imagen: null,
        imagenUrl: producto ? producto.imagenUrl : null,
    });

    useEffect(() => {
        if (producto) {
            setFormState({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                bodega: producto.bodega,
                varietal: producto.varietal,
                categoria: producto.categoria,
                imagen: null,
                imagenUrl: producto.imagenUrl,
            });
        }
    }, [producto]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormState((prevState) => ({
            ...prevState,
            imagen: e.target.files[0],
            imagenUrl: URL.createObjectURL(e.target.files[0]),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nombre", formState.nombre || '');
        formData.append("precio", formState.precio || '');
        formData.append("bodega", formState.bodega || '');
        formData.append("varietal", formState.varietal || '');
        formData.append("categoria", formState.categoria || '');
    
        if (formState.imagen) {
            formData.append("imagen", formState.imagen);
        }
    
    
        onSave(formState.id, formData);
    };
    

    const handleCancel = () => {
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label">Nombre</label>
                <input
                    className="form-control"
                    type="text"
                    name="nombre"
                    value={formState.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="form-label">Precio</label>
                <input
                    className="form-control"
                    type="number"
                    name="precio"
                    value={formState.precio}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="form-label">Categoría</label>
                <select
                    className="form-select"
                    name="categoria"
                    value={formState.categoria}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una categoría</option>
                    <option value="Vinos">Vinos</option>
                    <option value="Spirits">Spirits</option>
                    <option value="Whiskies">Whiskies</option>
                </select>
            </div>
            <div>
                <label className="form-label">Bodega</label>
                <input
                    className="form-control"
                    type="text"
                    name="bodega"
                    value={formState.bodega}
                    onChange={handleChange}
                    disabled={formState.categoria !== "Vinos"}
                />
            </div>
            <div>
                <label className="form-label">Varietal</label>
                <input
                    className="form-control"
                    type="text"
                    name="varietal"
                    value={formState.varietal}
                    onChange={handleChange}
                    disabled={formState.categoria !== "Vinos"}
                />
            </div>
            <div>
                <label className="form-label">Imagen</label>
                {formState.imagenUrl && (
                    <div>
                        <img
                            src={formState.imagenUrl}
                            alt="Imagen del producto"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />
                    </div>
                )}
                <input
                    className="form-control"
                    type="file"
                    name="imagen"
                    onChange={handleFileChange}
                />
            </div>
            <button type="submit">Guardar</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
    );
};

export default FormularioProducto;
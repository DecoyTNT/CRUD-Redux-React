import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions del redux
import { crearNuevoProductoAction } from '../../actions/productoActions';

const NuevoProducto = () => {

    // state del componente
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    // Utilizar use dispatch y te crea una función
    const dispatch = useDispatch();

    // Mandar llamar el action de productoAction
    const agregarProducto = producto => {
        dispatch(crearNuevoProductoAction(producto));
    }

    const onSubmitNuevoProducto = e => {
        e.preventDefault();

        // Validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            return;
        }

        // no hay errores

        // Crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        <form
                            onSubmit={onSubmitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre del producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio del producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e => setPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;
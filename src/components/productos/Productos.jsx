import React, { Fragment, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../../actions/productosObtenerActions';
import Producto from './Producto';

const Productos = () => {

    // Utilizar use dispatch y te crea una función
    const dispatch = useDispatch();

    useEffect(() => {
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
        // eslint-disable-next-line
    }, []);

    // Acceder al state del store
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center">Hubo un error</p> : null}
            {cargando ? <p className="text-center">Cargando...</p> : null}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {(productos === undefined)
                        ? null
                        : (productos.map(producto => (
                            <Producto
                                key={producto._id}
                                producto={producto}
                            />
                        )))
                    }
                </tbody>
            </table>
        </Fragment>
    );
}

export default Productos;
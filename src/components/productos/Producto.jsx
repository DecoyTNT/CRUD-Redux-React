import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../../actions/productoEliminarActions';
import { obtenerProductoEditarAction } from '../../actions/productoEditarActions';
// import { obtenerProductosAction } from '../../actions/productosObtenerActions';

const Producto = ({ producto }) => {
    const { nombre, precio, _id } = producto;

    const dispatch = useDispatch();
    const history = useHistory(); // Habiliar history para redireccion

    const confirmarEliminarProducto = id => {
        // Preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina, no se podra recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // Pasarlo al action
                dispatch(borrarProductoAction(id));
            }
        });

    }

    // Función que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditarAction(producto))
        history.push(`/productos/editar/${producto.id}`);
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold"> $ {precio}</span></td>
            <td>
                <button
                    type="button"
                    onClick={() => redireccionarEdicion(producto)}
                    className="btn btn-primary mr-2"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(_id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

export default Producto;
import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// Mostrar una alerta
export function mostrarAlertaAction(alerta) {
    return (dispatch) => {
        dispatch(mostrarAlerta(alerta));
    }
}

const mostrarAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch(ocultarAlerta())
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
});
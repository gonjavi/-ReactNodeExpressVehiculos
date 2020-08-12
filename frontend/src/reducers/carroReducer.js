import { CARROS_LIST_SUCCESS, CARROS_LIST_REQUEST, CARROS_LIST_FAIL } from '../constantes/carroConstantes';

function carroListaReducer(state= { recordset: [] }, action) {
  switch(action.type) {
    case CARROS_LIST_REQUEST:
      return { loading: true };
    case CARROS_LIST_SUCCESS:
      return { 
        loading: false,
        recordset: action.recordset };
    case CARROS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { carroListaReducer }

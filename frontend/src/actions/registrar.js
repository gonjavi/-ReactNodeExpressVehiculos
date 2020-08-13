import axios from 'axios';

export const CARRO_REGISTTRO_REQUEST = 'CARRO_REGISTTRO_REQUEST';
export const CARRO_REGISTTRO_SUCCESS = 'CARRO_REGISTTRO_SUCCESS';
export const CARRO_REGISTTRO_FAIL = 'CARRO_REGISTTRO_FAIL';

const registrar = (linea, marca, modelo, color, Foto) => async (dispatch) => {
  dispatch({type: CARRO_REGISTTRO_REQUEST, payload: {linea, marca, modelo, color, Foto}});

  try {
    const {data} = await axios.post("http://localhost:5000/carro/nuevo", 
      {linea, marca, modelo, color, Foto},
      {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH',
        },
      }
    );
    dispatch({type: CARRO_REGISTTRO_SUCCESS, payload: data});
  } catch (error) {
    dispatch({ type: CARRO_REGISTTRO_FAIL, payload: error.message})
  }
}

export { registrar };
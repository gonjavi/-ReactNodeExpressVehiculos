import React, { useEffect } from 'react';
import { traerCarros } from '../actions/carroAction';
import { useSelector, useDispatch } from 'react-redux';

const Carros = props => {
  const carrosLista = useSelector(state => state.carrosLista);
  const { recordset, loading, error } = carrosLista;
  console.log(recordset)
  const dispatch = useDispatch();

  
  
  return (
    loading? <div> Loading...</div> :
    error? <div>{error}</div>:
    <div>
      {
        recordset.map(carro =>           
          <div key={carro.id} className="carro">
            <img 
              className='picture'   
              alt={carro.linea}
              width = '60%'
              height = '60%'
              src={carro.Foto}
            />
            <ul>
              <li> linea: {carro.linea}</li>
              <li> Marca: {carro.marca}</li>
              <li> Modelo: {carro.modelo}</li>
              <li> Color: {carro.color}</li>
            </ul>
          </div>
        )
      }      
    </div>
    
  );
};

export default Carros;

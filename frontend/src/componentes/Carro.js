import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BorrarCarroApi from '../actions/borrarCarro';
import { Link } from 'react-router-dom';

const Carro = props => {
  const { 
   vehiculo
  } = props;
    
  const { id, linea, marca, modelo, foto } = vehiculo;
  
  function borrarCarro() {    
     BorrarCarroApi(id);
     window.location.reload(false);
  } 

  return (            
    <div key={id} className="carro">
      <div className="cuadro">
        <ul className="titulo">
          <li> Linea: {linea}</li>
          <li> Marca: {marca}</li> 
          <li> {modelo}</li>
          <li className="borrarActualizar"><a className="borrarActualizar" onClick={borrarCarro}>Eliminar</a></li>
          <li className="borrarActualizar"> <Link to={{
            pathname: `actualizar/${id}`,
            actualizarProps: {
              vehiculo: {vehiculo}              
            }            

          }}>Actualizar</Link></li>  
        </ul>
      </div>
      <img 
        className='picture'   
        alt={linea}
        width = '50%'
        height = '60%'
        src={foto}
      />
     
    </div>
  );   
};
Carro.defaultProps = {
 vehiculo: {},
};

Carro.propTypes = {
  vehiculo: PropTypes.objectOf(PropTypes.any),  
};
export default Carro;

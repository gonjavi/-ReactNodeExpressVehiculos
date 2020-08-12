import React from 'react';
import PropTypes from 'prop-types';

const Carro = props => {
  const { 
   vehiculo
  } = props;
    
  const { id, linea, marca, modelo, color, Foto } = vehiculo;
  return (            
    <div key={id} className="carro">
      <img 
        className='picture'   
        alt={linea}
        width = '60%'
        height = '60%'
        src={Foto}
      />
      <ul>
        <li> linea: {linea}</li>
        <li> Marca: {marca}</li>
        <li> Modelo: {modelo}</li>
        <li> Color: {color}</li>
      </ul>
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

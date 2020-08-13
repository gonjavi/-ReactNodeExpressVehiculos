import React from 'react';
import PropTypes from 'prop-types';

const Carro = props => {
  const { 
   vehiculo
  } = props;
    
  const { id, linea, marca, modelo, FOTO } = vehiculo;
  
  return (            
    <div key={id} className="carro">
      <div className="cuadro">
        <ul className="titulo">
          <li> Linea: {linea}</li>
          <li> Marca: {marca}</li> 
          <li> {modelo}</li>   
        </ul>
      </div>
      <img 
        className='picture'   
        alt={linea}
        width = '50%'
        height = '60%'
        src={`data:image/png;base64,${FOTO}`}
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

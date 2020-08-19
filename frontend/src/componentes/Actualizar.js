import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

const Actualizar = props => { 
  const [linea1, setLinea] = useState('');
  const [marca1, setMarca] = useState('');
  const [modelo1, setModelo] = useState('');
  const [color1, setColor] = useState('');
  const [foto1, setFoto] = useState('');
  const carrosLista  = useSelector(state => state.carrosLista);
  /* const { recordset} = carrosLista;
  const {
    match,
  } = props;
  const { params } = match;
  const { id } = params;
  const carro = recordset.filter(carro => carro.id === id); */

  console.log(carrosLista)
  const { vehiculo } = props.location.actualizarProps;
     
  const { linea, marca, modelo, foto, color } = vehiculo.vehiculo;
   
  const carroRegistro = useSelector(state => state.carroRegistro);
  const { carroInfo } = carroRegistro;
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (carroInfo) {
      props.history.push("/");
    }
    return () => {

    }
  }, [carroInfo]);

  const submitHandler = e => {
   /*  dispatch(registrar(linea1, marca1, modelo1, color1, foto1)); */
  }
  const handleImage = e => {
    const Imagen = e.target.files[0];
    crearImagenBase64(Imagen);
    
  }
  const crearImagenBase64 = file => {
    const reader = new FileReader();

    reader.onload = e => {
      setFoto(e.target.result);
    };
    
    reader.readAsDataURL(file);
  }
  

  return (
    <Form>
    <h5>Actualizar Automovil</h5>    
    <Form.Row>         
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Linea</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={linea}
            onChange={(e) => setLinea(e.target.value)}
          />         
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={marca}
            onChange={(e) => setMarca(e.target.value)}
          />         
        </Form.Group>
        
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />         
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Color</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={color}
            onChange={(e) => setColor(e.target.value)}
          />         
        </Form.Group> 
        <Form.Group as={Col} md="3">
            <Form.File
              className="position-relative"
              required
              name="file"
              label="Foto"
              onChange={handleImage}
              id="validationFormik107"
              feedbackTooltip
            />
        </Form.Group>
      </Form.Row>
      <Form.Row>       
        <Form.Group as={Col} md="3">
          <Button type="submit">Actualizar</Button>
        </Form.Group>                
      
    </Form.Row>   
  </Form>
  );
}

Actualizar.propTypes = {  
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default Actualizar;


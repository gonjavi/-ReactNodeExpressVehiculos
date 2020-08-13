import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registrar } from '../actions/registrar';
import imageToBase64 from 'image-to-base64';

function RegistrarCarro(props) {
  const [linea, setLinea] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [color, setColor] = useState('');
  const [Foto, setFoto] = useState('');
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
    e.preventDefault();
    dispatch(registrar(linea, marca, modelo, color, Foto));
    console.log(Foto)
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
    
    reader.readAsBinaryString(file);
  }
  
 
  return (
  <div className="form">
    <form onSubmit={submitHandler}>
      <ul className="form-container">
        <li>
          <h2>Registrar Vehiculo</h2>
        </li>
        <li>
          <label htmlFor="linea">
            linea
          </label>
          <input type="text" name="linea" id="linea" onChange={(e) => setLinea(e.target.value)} />
        </li>
        <li>
          <label htmlFor="marca">
            Marca
          </label>
          <input type="text" name="marca" id="marca" onChange={(e) => setMarca(e.target.value)} />
        </li>
        <li>
          <label htmlFor="modelo">Modelo</label>
          <input type="text" name="modelo" id="modelo" onChange={(e) => setModelo(e.target.value)} />
        </li>
        <li>
          <label htmlFor="color">Color</label>
          <input type="" name="color" id="color" onChange={(e) => setColor(e.target.value)} />
        </li>
        <li>
          <label htmlFor="Foto">Foto</label>
          <input type="file" name="Foto" id="Foto" onChange={handleImage} />
        </li>
        <li>
          <button type="submit" className="button primary">Registrar</button>
        </li>              
      </ul>
    </form>
   
  </div>);
}

export default RegistrarCarro;

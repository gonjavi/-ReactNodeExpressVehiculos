import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { traerCarros } from '../actions/carroAction';
import { useSelector, useDispatch } from 'react-redux';
import CarroLista from '../contenedores/CarroLista';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerCarros());
    return () => {

    }
    
  }, []);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Automoviles</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />      
    </Navbar>
    <main className="container main">
      <CarroLista />
      
    </main>
    <footer className="footer">
        Derechos reservados
    </footer>

    
    </div>
  );
}

export default App;

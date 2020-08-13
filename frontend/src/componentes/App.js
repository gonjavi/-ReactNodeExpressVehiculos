import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { traerCarros } from '../actions/carroAction';
import { useDispatch } from 'react-redux';
import CarroLista from '../contenedores/CarroLista';
import Grafica from './Grafica';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerCarros());
    return () => {

    }
    
  }, );
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Automoviles</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />      
    </Navbar>
    <main className="container main">
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CarroLista} />
          <Route path="/grafica" component={Grafica} />
        </Switch>
      </BrowserRouter>
      
    </main>
    <footer className="footer">
        Derechos reservados
    </footer>

    
    </div>
  );
}

export default App;

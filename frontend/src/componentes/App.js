import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { traerCarros } from '../actions/carroAction';
import { useDispatch } from 'react-redux';
import CarroLista from '../contenedores/CarroLista';
import Grafica from './Grafica';
import Actualizar from './Actualizar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerCarros());
    return () => {

    }
    
  }, );
  return (
    <BrowserRouter>
      <div className="App">      
        <Navbar bg="light" className=" justify-content-between" expand="lg">
          <Navbar.Brand className="ml-5">Automoviles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Nav className="ml-auto">
            <NavLink to="/" className="mr-2 link">Inicio</NavLink>
            <NavLink to="/grafica" className="mr-5 link">Graficas</NavLink>  
          </Nav>
        </Navbar>
      <main className="container main">
      
          <Switch>
            <Route exact path="/" component={CarroLista} />
            <Route path="/grafica" component={Grafica} />
            <Route path="/actualizar/:id" component={Actualizar} />
          </Switch>       
        
      </main>
      <footer className="footer">
          Derechos reservados
      </footer>

      
      </div>
    </BrowserRouter>
  );
}

export default App;

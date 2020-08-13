import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { carroListaReducer } from './reducers/carroReducer';
import filterReducer from './reducers/filter';
import { carroRegistroReducer } from './reducers/carroRegistroReducer';


const reducer = combineReducers({
  carrosLista: carroListaReducer,
  filter: filterReducer,
  carroRegistro: carroRegistroReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { carroListaReducer } from './reducers/carroReducer';
import filterReducer from './reducers/filter';


const reducer = combineReducers({
  carrosLista: carroListaReducer,
  filter: filterReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
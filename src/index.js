import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers , applyMiddleware , compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import counterReducer from "./store/counter";
import resultReducer from "./store/results";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const logger=store=>{
  return next=>{
    return action=>{
      console.log("[MIDDLEWARE][ DISPATCH]" , action)
      const result = next(action);
      console.log("[MIDDLEWARE] nextState" , store.getState())
      return result
    }
  }
}


const rootReducers   = combineReducers ({

  ctr:counterReducer,
  rsl:resultReducer

})

const store = createStore(rootReducers , composeEnhancer(applyMiddleware(logger,thunk)) );



ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import magicReducer from './reducers/magicReducer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DecksContainer from './components.create_card_container.js'
import Homepage from './components/homepage.js'


let store = createStore(magicReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
  	<Provider store = {store}>
  		<Router>
  			<React.Fragment>
  				<Route path="/" component={Homepage}/>
    			<Route exact path="/draft" component={App} />
    			<Route exact path="/create" component={CreateCardContainer} />
    		</React.Fragment>
    	</Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

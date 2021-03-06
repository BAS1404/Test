import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/calc" component={App} />
      </div>
   </HashRouter >
), document.getElementById( 'root' ) )

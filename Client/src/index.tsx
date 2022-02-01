import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './indexS.scss';
import UserCards from './components/UserCards/UserCards';
import SandBox from './Movie/MovieApp/MovieApp';
import App from './Movie/MovieApp/MovieApp'





ReactDOM.render(

  <StrictMode>
    <div className="App">
    <App />
    </div>
  </StrictMode>,

  document.getElementById('root')
);

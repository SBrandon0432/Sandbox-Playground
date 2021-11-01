import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './indexS.scss';
import UserCards from './components/UserCards/UserCards';
import Sandbox from './/Sandbox/Sandbox'





ReactDOM.render(

  <StrictMode>
    <div className="App">
    <Sandbox />
    </div>
  </StrictMode>,

  document.getElementById('root')
);

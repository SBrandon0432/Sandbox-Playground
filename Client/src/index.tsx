import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './indexS.scss';
import UserCards from './components/UserCards/UserCards';





ReactDOM.render(

  <StrictMode>
    <div className="App">
      < UserCards />
    </div>
  </StrictMode>,

  document.getElementById('root')
);

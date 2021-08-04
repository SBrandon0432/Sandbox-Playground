import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './indexS.scss';
import UserCard from './components/UserCards/UserCards';

ReactDOM.render(
  <StrictMode>
    <div className="App">
      < UserCard />
    </div>
  </StrictMode>,

  document.getElementById('root')
);

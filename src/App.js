import React from 'react';
import './App.css';

function App() {
  return (
    <div className="split-screen">
      <div className="left-side">
        <a href='https://www.facebook.com'>
        <div className='div-h3'>
        <h3 className='h1-day'>INTERMEZZO BY DAY</h3>
        <h4 className='h1-day-mob'>BY DAY</h4>
        </div>
        </a>
      </div>
      <div className="right-side">
        <a href='https://www.instagram.com'>
        <div className='div-h3'>
        <h3 className='h1-night'>INTERMEZZO BY NIGHT</h3>
        <h4 className='h1-night-mob'>BY NIGHT</h4>
        </div>
        </a>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './style.css';
import Test from './Test'

export default function MyApp() {
  function fun($data) {
    console.log($data.target.value)
  }
  return (
    <div>
      <label htmlFor="input">Input : </label>
      <input type="text "
             placeholder="enter input............."
             minLength={2}
             maxLength={10}
             onChange={(e)=>fun(e)}
             /> <br/>
      <Test flagToggle={true} />
      <Test flagToggle={false} />
    </div>
  );
}


import React from 'react';
import './style.css';

export default function Test({flagToggle}) {
  return (
    <div>
      {
        flagToggle ? '🟢 Online' : '🔴 Offline'
      }
    </div>
  );
}

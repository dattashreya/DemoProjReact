import React from 'react';
import './style.css';
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
    </div>
  );
}

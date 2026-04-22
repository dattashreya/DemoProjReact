import React from 'react';
import './style.css';
export default function Test() {
const name = 'alice johnson  ';
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div>
      <h4>{name}</h4>
      <h2>{capitalize(name)}</h2>        
      <p>{name.toUpperCase()}</p>         
      <p>Name length: {name.length}</p>   
    </div>
  );
}

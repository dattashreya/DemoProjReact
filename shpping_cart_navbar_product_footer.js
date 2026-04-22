import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Prod from './Prod';
import Foot from './Foot';
export default function MyApp() {
  return (
    <div>
      <Navbar />
      <Prod  name="Shoes" price={99} />
      <Prod  name="Hat"   price={29} />
      <Prod name="Bag"   price={59} />
      <Foot />
    </div>
  );
}

import React from 'react';
export default function Navbar() {
  return(
    <nav>
      <h1>Shopping Cart</h1>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  )
}

import React from 'react';
function Prod({ name, price }) {
  return (
    <div className="card">
      <h2 className="box">{name}</h2>
      <p  className="box">${price}</p>
      <button className={{color: "red"}}>Add to cart</button>
    </div>
  );
}
export default Prod;

import React from 'react';
import './style.css';
function Foot() {
  return (
    <div className="footer">
      <button>back</button>
      <button>next</button>
    </div>
  );
}
export default Foot;

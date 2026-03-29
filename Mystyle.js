import React from 'react';
import './style.css'
function Mystyle(props) {
  let myStyle = props.primary ? 'primary' : '';
  return (
    <div>
      <h3 className={myStyle}>stylesheet added</h3>
    </div>
  );
}
export default Mystyle;


.primary {
  color: blue;
}


import React, { Component } from 'react';
import { render } from 'react-dom';
import Mystyle from './Mystyle';
import './style.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>
        <Mystyle primary={true}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

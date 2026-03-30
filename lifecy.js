import React, { Component } from 'react';
import LifecyB from './lifecyb';
import './style.css';
export default class Lifecy extends Component {
  constructor(props) {
    super(props)
    console.log('constructor A');
  }
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps A');
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount A');
  }
  render() {
    console.log('render A');
    return (
      <div>
        hhhh
        <LifecyB />
      </div>
    );
    
  }
}


lifecyb.js
----------
import React, { Component } from 'react';
import './style.css';
export default class LifecyB extends Component {
  constructor(props) {
    super(props)
    console.log('constructor B');
  }
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps b');
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount b');
  }
  render() {
    console.log('render b');
    return (
      <div>
        bbb
      </div>
    );
    
  }
}

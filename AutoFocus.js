import React, { Component } from 'react';

class AutoFocus extends Component {
  _isMounted = true;
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  clickMethod=()=> {
    alert(this.inputRef.current.value)
    console.log(this.inputRef.current.value);
  }
  render() {
    return (
      <>
        Input : <input type="text" ref={this.inputRef} />
        <button onClick={this.clickMethod}>Button</button>
      </>
    );
  }
}
export default AutoFocus;

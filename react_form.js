import React, {Component} from 'react';
class Reactform extends Component {
  constructor(props) {
    super(props);
    this.state ={
      username: '',
      password: '',
    }
  }
  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handlepasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  onSubmitMethod = (event) => {
    alert(`values ${this.state.username} - ${this.state.password}`)
  }
  render() {
  return(
    <div>
      <form action=""  onSubmit={this.onSubmitMethod}>
        <div className="userid">
          <label htmlFor="">User id : </label>
          <input type="text"
                 value={this.state.username} 
                 onChange={this.handleChange} />
        </div>
        <div className="password">
          <label htmlFor="">Password : </label>
          <input type="password"
                 value={this.state.password}
                 onChange={this.handlepasswordChange}/>
        </div>
        <div className="submit">
          <button type="submit">submit</button>  
        </div>        
      </form>
    </div>
  )  }
}
export default Reactform

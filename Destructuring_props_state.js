import React from "react";
class Greet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
           hello {this.props.name} = {this.props.heroName} 
        </div>
    )
  }
}
export default Greet

<Greet name="shreya" heroName="datta"/>

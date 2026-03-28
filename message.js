// import React from "react";

// function Message() {
//     return (
//         <>
           
//         </>
//     );
// }

// export default Message
import React, {Component} from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'welcome visitor'
    }
  }
  changeMessage() {
    this.setState({
      message: 'subscribed'
    })
  }
  render() {
    return (
        <div>
           <button onClick={()=>this.changeMessage()}>Subscribe</button>
           <h1>
             {this.state.message}
           </h1>
        </div>
    )
  }
}
export default Message
import React from "react";
function Clickhand() {
  function click() {
    console.log('click')
  }
  return (
    <div>
       <button onClick={click}>func</button> 
    </div>
    )
}
export default Clickhand

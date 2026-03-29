import React from 'react';
import './style.css'
function Mystyle(props) {
  let myStyle = props.primary ? 'primary' : ''
  return (
    <div>
      <h3 className={`${myStyle}  font-xl  secondary`}>stylesheet added</h3>
    </div>
  );
}
export default Mystyle

.primary {
  color: blue;
}
.font-xl {
  font-size: 30px;
}
.secondary {
  background-color: blanchedalmond;
}

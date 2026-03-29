import React from 'react';
const myInlineStyle = {
  backgroundColor: 'blanchedalmond',
  color: 'red'
};
function Inlinestyle(props) {
  return (
    <div>
      <h3 style={myInlineStyle}>Inlinestyle stylesheet added</h3>
    </div>
  );
}
export default Inlinestyle

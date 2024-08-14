import React from 'react';

function SecondExample() {
  const handleEv = () => {
    const arr = ['shreya', 'shreyo', 'shri'];
    const int = Math.floor(Math.random() * 3);

    return arr[int];
  };

  return (
    <>
      <h3>Hello {handleEv()}</h3>
    </>
  );
}

export default SecondExample;

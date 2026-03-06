import React, { useState, useEffect } from 'react';

function Count() {
  const [c, setC ] = useState(0);
  useEffect(() => {
    setTimeout(()=> {
      setC (c => c+1)
    },1500); 
  });

  return(
    <div>
      count: {c}
    </div>
  )
}

export default Count;

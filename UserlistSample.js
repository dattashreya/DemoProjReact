import React, {useState} from 'react';
function Userlist() {
  const [users, setUsers] = useState(['Shreya','shre']);
 function userUpdate(name) {
   setUsers([...users, name]);
 }
  return (
    <div>
      <ul>
        {
          users.map(i=><li key={i}>
            {i}
          </li>)
        }
      </ul>
      <button onClick={()=>userUpdate('hhhhh')}>click</button>
    </div>
  );
}

export default Userlist;

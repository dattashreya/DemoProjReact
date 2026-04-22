import React from 'react';
import './style.css';
import Test from './Test';
export default function MyApp() {
  const users = [
    {
      id: 1,
      name: 'Shreya',
      email: 'e1@.com'
    },
    {
      id: 2,
      name: 'Shrey',
      email: 'e2@.com'
    },
    {
      id: 3,
      name: 'Shre',
      email: 'e2@.com'
    }
  ]
  return (
    <div>
      <Test users={users}/>
    </div>
  );
}


import React from 'react';
export default function Test({users}) {
  return (
    <div>
      <ul>
        {
          users.map(
            i=>(
            <li key={i.id}>{i.id}-{i.name}-{i.email}</li>
            ))
        }
      </ul>
    </div>
  );
}

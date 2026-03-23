import React from 'react';
function ListComponent() {
  const dataList = [
    { id: '1', name: 'apple' },
    { id: '2', name: 'mango' },
    { id: '3', name: 'banana' },
  ];
  return (
    <div>
      <h3>List of fruits</h3>
      <ul>
        {dataList.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListComponent;

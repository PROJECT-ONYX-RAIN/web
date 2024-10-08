import React from 'react';

const Fulfillment = () => {
  const fulfillmentData = [
    { id: 1, order: 'Order 001', status: 'Shipped' },
    { id: 2, order: 'Order 002', status: 'Unshipped' },
    // Add more fulfillment data as needed
  ];

  return (
    <div>
      <h1>Fulfillment Status</h1>
      <ul>
        {fulfillmentData.map((item) => (
          <li key={item.id} style={{ color: item.status === 'Unshipped' ? 'red' : 'black' }}>
            {item.order} - {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fulfillment;
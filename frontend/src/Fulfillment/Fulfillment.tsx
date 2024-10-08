import React from 'react';
import { Link } from 'react-router-dom';
import data from './fulfillmentData';

function fulfillment() {
    return (
        <div className="content content-margined">
            <div className="order-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="order-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th> //
                            <th>TrackingID</th>
                            <th>Is Shipped</th>
                            <th>Shipping Date</th>
                            <th>Is Delivered</th>
                            <th>Delivered Date</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
    {FulfillmentData.orders.map((order) => (
        <tr key={order._id} style={{ color: item.status === 'Unshipped' ? 'red' : 'black' }}>
            <td>{order._id}</td>
            <td>{order.TrackingID}</td>
            <td>{order.isShipped ? 'Yes' : 'No'}</td>
            <td>{order.ShippedDate}</td>
            <td>{order.isDelivered ? 'Yes' : 'No'}</td>
            <td>{order.deliveredDate}</td>
            <td>
                <Link to={"/order/" + order._id} className="button secondary">
                    Details
                </Link>
            </td>
        </tr>
    ))}
</tbody>
                </table>
            </div>
        </div>
    );
}

export default fulfillment;
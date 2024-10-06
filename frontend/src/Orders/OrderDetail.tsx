import data from "./data"; 
import { useParams } from "react-router-dom";

function OrderDetail() {
    const { id } = useParams<{ id: string }>();
    const order = data.orders.find((o) => o._id === parseInt(id));

    return (
        <div>
            <h3>Order name: {order?.user.name}</h3>
        </div>
    );
}

export default OrderDetail;
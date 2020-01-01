import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((acc, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available'

      
      if (isAvailable) {
        return acc + fish.price * count;
      } else {
        return acc;
      }
    }, 0);
    return (
      <div className="inventory">
        <h2>Order</h2>
        <ul>
          <li>{formatPrice(total)}</li>
        </ul>
      </div>
    );
  }
}

export default Order;

import React from "react";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((acc, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];

      count ? acc += fish.price : acc += fish.price * count;
      return acc;
    }, 0);
    return (
      <div className="inventory">
        <h2>Order</h2>
        <ul>
          <li>{total}</li>
        </ul>
      </div>
    );
  }
}

export default Order;

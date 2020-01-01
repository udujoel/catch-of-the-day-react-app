import React from "react";

class Order extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Order</h2>
        <ul>
          <li>{console.log(this.props.orders)}</li>
        </ul>
      </div>
    );
  }
}

export default Order;

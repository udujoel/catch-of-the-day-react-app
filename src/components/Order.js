import React from "react";

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((acc,cur)=>{},0)
    return (
      <div className="inventory">
        <h2>Order</h2>
        <ul>
          <li>{console.log(this.props.order)}</li>
        </ul>
      </div>
    );
  }
}

export default Order;

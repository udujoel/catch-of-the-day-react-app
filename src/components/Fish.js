import React from "react";

class Fish extends React.Component {
  render() {
    return (
      <li className="menu-fish">
        name: {this.props.detail.name}
        <img src={this.props.detail.image} />
        {this.props.detail.desc}<br/>
        price: {this.props.detail.price}
      </li>
    );
  }
}

export default Fish;

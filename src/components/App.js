import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  state = {
    fishes: {},
    Inventory: {}
  };

  addFish = fish => {
    // make a copy of the state
    const fishes = { ...this.state.fishes };
    // add the new fish to our copy with unique id
    fishes[`fish${Date.now()}`] = fish;
    // update the state with current fish
    this.setState({
      fishes: fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;

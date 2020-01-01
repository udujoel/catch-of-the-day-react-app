import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
    inventory: {}
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

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  addToOrder = key => {
    // make a copy of state
    const order = { ...this.state.order };
    //add to or update order
    order[key] = order[key] + 1 || 1;

    //call setState to commit changes
    this.setState({ order: order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                addToOrder={this.addToOrder}
                detail={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
        />
      </div>
    );
  }
}

export default App;

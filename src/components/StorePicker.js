import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
 
  myInput = React.createRef();
  gotToStore = (event)=> {
    // stop page from submitting
    event.preventDefault();
    // get entered store name
    console.log(this.myInput);
    // change page to /store/ -what they entered
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.gotToStore}>
        <h2>Please Enter a Store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Enter Store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;

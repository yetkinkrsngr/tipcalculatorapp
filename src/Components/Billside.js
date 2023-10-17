import React, { Component } from "react";
import usd from "../images/icon-dollar.svg";

class Billside extends Component {
  render() {
    return (
      <>
        <p>Bill</p>
        <img src={usd} alt="" />
        <input type="text" className="billinput" />
      </>
    );
  }
}

export default Billside;

import React, { Component } from "react";
import people from "../images/icon-person.svg";

class Billside extends Component {
  render() {
    return (
      <>
        <p>Number of People</p>
        <img src={people} className="inPhoto" alt="" />
        <input type="text" placeholder="0" id="" />
      </>
    );
  }
}

export default Billside;

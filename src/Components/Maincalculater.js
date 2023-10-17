import React, { Component } from "react";
import Leftcalculater from "./Leftcalculater";
import "../app.css";
class Maincalculater extends Component {
  render() {
    return (
      <>
        <div className="Container">
          <Leftcalculater />
        </div>
      </>
    );
  }
}

export default Maincalculater;

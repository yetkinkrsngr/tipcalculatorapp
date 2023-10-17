import React, { Component } from "react";
import Billside from "./Billside";
import SlcTipSide from "./SlcTipSide";

class Leftcalculater extends Component {
  render() {
    return (
      <>
        <Billside />
        <SlcTipSide />
      </>
    );
  }
}

export default Leftcalculater;

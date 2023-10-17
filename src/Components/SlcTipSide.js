import React, { Component } from "react";

class SlcTipSide extends Component {
  render() {
    return (
      <>
        <div className="selectTip">
          <p>Select Tip %</p>
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input type="text" placeholder="Custom" />
        </div>
      </>
    );
  }
}

export default SlcTipSide;

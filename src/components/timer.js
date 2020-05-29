import React, { Component } from "react";

class MainTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { minutes, segundos, current } = this.props;
    return (
      <span className="mainTimmer">
        <span>{current}</span>
        <span>
          {minutes < 10 ? `0${minutes}` : minutes}:{segundos < 10 ? `0${segundos}`:segundos}
        </span>
      </span>
    );
  }
}

export default MainTimer;

import React, { Component } from "react";

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <button onClick={this.props.strike}>Strike</button>
        <button onClick={this.props.ball}>Ball</button>
        <button onClick={this.props.foul}>Foul</button>
        <button onClick={this.props.hit}>Hit</button>
      </div>
    );
  }
}

export default Dashboard;

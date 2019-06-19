import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  count = () => {
    if (this.state.balls > 3 || this.state.strikes > 2) {
      this.setState({ balls: 0, strikes: 0 });
    }
  };

  hit = () => {
    this.setState({ balls: 0, strikes: 0 });
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ ...this.state, strikes: (this.state.strikes += 1) });
    }
  };

  ball = () => {
    this.setState({ ...this.state, balls: (this.state.balls += 1) });

    this.count();
  };

  strike = () => {
    this.setState({ ...this.state, strikes: (this.state.strikes += 1) });
    this.count();
  };

  render() {
    return (
      <div className="App">
        <section>
          <p>Balls: {this.state.balls}</p>
          <p>Strikes: {this.state.strikes}</p>
        </section>
        <Dashboard
          ball={this.ball}
          strike={this.strike}
          foul={this.foul}
          hit={this.hit}
        />
      </div>
    );
  }
}
export default App;

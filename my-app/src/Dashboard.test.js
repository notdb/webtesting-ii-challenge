import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("displays dashboard component", () => {
    const queries = render(<Dashboard />);
  });

  it("testing hit button", () => {
    const { getByText, queryByText } = render(<App />);
    // find the button
    const button = getByText(/Hit/i);
    fireEvent.click(button);
    expect(getByText(/Strikes: 0/i)).toBeTruthy();
    expect(getByText(/Balls: 0/i)).toBeTruthy();
  });

  it("testing ball button", () => {
    const { getByText, queryByText } = render(<App />);
    const button = getByText(/^Ball$/i);
    //const balls = this.state.balls;
    expect(getByText(/Strikes: [0-9]/i)).toBeTruthy();
  });
});

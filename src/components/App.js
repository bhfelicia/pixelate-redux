import React, { Component } from "react";
import store from "../store";

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { grid } = this.state;
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id="add-row">Add a row</button>
          <select>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <table>
          <tbody>
            {grid.map((row, idx) => (
              <tr key={`${row}-${idx}`}>
                {row.map((cell, idx) => (
                  <td key={`${cell}-${idx}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

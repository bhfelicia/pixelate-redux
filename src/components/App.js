import React, { Component } from "react";
import { store, addRow, selectColor, draw } from "../store";

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

  handleColorChange(event) {
    store.dispatch(selectColor(event.target.value));
  }
  draw(event) {
    console.log(event.target);
    store.dispatch(draw(event.target));
  }
  render() {
    const { grid } = this.state;
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id="add-row" onClick={() => store.dispatch(addRow())}>
            Add a row
          </button>
          <select onChange={this.handleColorChange}>
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
            {grid.map((row, rowIdx) => (
              <tr key={`${row}-${rowIdx}`} value={`${rowIdx}`}>
                {row.map((color, cellIdx) => (
                  <td
                    key={`${color}-${cellIdx}`}
                    className={color}
                    value={`${cellIdx}`}
                    onClick={() => this.draw(rowIdx, cellIdx)}
                  ></td>
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

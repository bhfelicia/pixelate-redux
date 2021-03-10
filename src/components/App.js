import React, { Component } from 'react';
import { store, addRow, selectColor, draw } from '../store';
import Table from './Table';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.draw = this.draw.bind(this);
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
  draw(rowIdx, cellIdx) {
    store.dispatch(draw(rowIdx, cellIdx));
  }
  render() {
    const { grid } = this.state;
    const { draw } = this;
    //console.log('App:', draw);
    return (
      <div id='pixelate'>
        <h1>Pixelate</h1>
        <div>
          <button id='add-row' onClick={() => store.dispatch(addRow())}>
            Add a row
          </button>
          <select onChange={this.handleColorChange}>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
            <option value='yellow'>Yellow</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
            <option value='indigo'>Indigo</option>
            <option value='violet'>Violet</option>
            <option value='black'>Black</option>
            <option value='white'>White</option>
            <option value='brown'>Brown</option>
          </select>
        </div>
        <Table grid={grid} draw={draw} />
      </div>
    );
  }
}

export default App;

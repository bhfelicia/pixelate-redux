// We'll dive deeper into middleware later.
// For now, it's enough to know that this loggerMiddleware prints out useful
// information about everything that happens in your store.
// Much like requests in express pass from middleware to middleware, actions in redux
// pass from middleware to middleware. The loggerMiddleware gets a chance to see
// actions before they are processed. They get in the middle, hence, middleware.
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

// We'll soon revisit the initial state of this application.
const initialState = {
  grid: [Array(20).fill('')],
};

// ACTION TYPES
/* we'll add some action types soon */
const ADD_ROW = 'ADD_ROW';
const SELECT_COLOR = 'SELECT_COLOR';

// ACTION CREATORS
/* we'll also add the corresponding action creators */
const addRow = () => {
  return {
    type: ADD_ROW,
    row: Array(20).fill(''),
  };
};

// And we'll revisit this reducer.
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        grid: [...state.grid, action.row],
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export { store, addRow };

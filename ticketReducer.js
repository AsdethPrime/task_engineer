const Redux = require("redux");
const { combineReducers } = Redux;

const ADD_TICKET = "ADD_TICKET";
const REMOVE_TICKET = "REMOVE_TICKET";

const ticketById = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_TICKET:
      newState[action.payload.id] = action.payload;
      return newState;
    case REMOVE_TICKET:
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};

const ticketIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TICKET:
      return state.concat(action.payload.id);
    case REMOVE_TICKET:
      return state.filter(x => x !== action.payload.id);
    default:
      return state;
  }
};

const ticketReducer = combineReducers({
  ticketById,
  ticketIds
});

export default ticketReducer;

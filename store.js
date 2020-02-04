const Redux = require("redux");
const { createStore, combineReducers } = Redux;

import engineerReducer from "./engineerReducer";
import ticketReducer from "./ticketReducer";

const rootReducer = combineReducers({
  engineers: engineerReducer,
  tickets: ticketReducer
});

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

import store from "./store";

store.dispatch({
  type: ADD_ENGINEER,
  payload: {
    id: 1,
    name: "Manish",
    takingTicket: true,
    tickets: []
  }
});

store.dispatch({
  type: ADD_ENGINEER,
  payload: {
    id: 2,
    name: "John",
    takingTicket: true,
    tickets: []
  }
});

store.dispatch({
  type: REMOVE_ENGINEER,
  payload: {
    id: 2,
    name: "Manish",
    takingTicket: true,
    tickets: []
  }
});

store.dispatch({
  type: ADD_TICKET,
  payload: {
    id: 1,
    title: "Title 1",
    description: "Description 1"
  }
});

store.dispatch({
  type: ADD_TICKET,
  payload: {
    id: 2,
    title: "Title 2",
    description: "Description 2"
  }
});

store.dispatch({
  type: REMOVE_ENGINEER,
  payload: {
    id: 1,
    title: "Title 1",
    description: "Description 1"
  }
});

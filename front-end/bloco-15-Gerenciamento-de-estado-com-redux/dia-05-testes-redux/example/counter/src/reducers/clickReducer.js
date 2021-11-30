const INITIAL_STATE = {
  counter: 0,
}

export const ADD_CLICK = 'ADD_CLICK';

export const clickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CLICK:
    return { counter: state.counter + 1};
  default:
    return state;
  }
};

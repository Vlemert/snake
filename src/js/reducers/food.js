import DROP_FOOD from 'actions/drop-food';

export default (state = {
  x: -1,
  y: -1
}, action = {}) => {
  switch (action.type) {
    case DROP_FOOD:
      return {
        x: action.payload.x,
        y: action.payload.y
      };
    default:
      return state;
  }
};

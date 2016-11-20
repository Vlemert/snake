import actionTypes from 'constants/action-types';

export default (state = {
  x: -1,
  y: -1
}, action = {}) => {
  switch (action.type) {
    case actionTypes.DROP_FOOD:
      return {
        x: action.payload.x,
        y: action.payload.y
      };
    default:
      return state;
  }
};

import baseSpeed from 'constants/base-speed';
import actionTypes from 'constants/action-types';

export default (state = baseSpeed, action = {}) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return baseSpeed;
    case actionTypes.SNAKE_EATS:
      return state + 1;
    default:
      return state;
  }
};

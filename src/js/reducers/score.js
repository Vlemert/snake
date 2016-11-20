import actionTypes from 'constants/action-types';

export default (state = 0, action = {}) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return 0;
    case actionTypes.SNAKE_EATS:
      return state + 5;
    default:
      return state;
  }
}

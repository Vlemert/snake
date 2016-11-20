import gameState from 'constants/game-state';
import actionTypes from 'constants/action-types';

export default (state = gameState.WELCOME, action = {}) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return gameState.PLAYING;
    case actionTypes.SNAKE_DIED:
      return gameState.ENDED;
    default:
      return state;
  }
};

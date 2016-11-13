import gameState from 'constants/game-state';
import START_GAME from 'actions/start-game';
import SNAKE_DIED from 'actions/snake-died';

export default (state = gameState.WELCOME, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return gameState.PLAYING;
    case SNAKE_DIED:
      return gameState.ENDED;
    default:
      return state;
  }
};

import START_GAME from 'actions/start-game';
import SNAKE_EATS from 'actions/snake-eats';

export default (state = 0, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return 0;
    case SNAKE_EATS:
      return state + 5;
    default:
      return state;
  }
}

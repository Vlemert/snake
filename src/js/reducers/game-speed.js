import baseSpeed from 'constants/base-speed';
import START_GAME from 'actions/start-game';
import SNAKE_EATS from 'actions/snake-eats';

export default (state = baseSpeed, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return baseSpeed;
    case SNAKE_EATS:
      return state + 1;
    default:
      return state;
  }
};

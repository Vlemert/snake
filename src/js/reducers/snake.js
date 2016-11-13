import gameDimensions from 'constants/game-dimensions';
import gameResolution from 'constants/game-resolution';
import keys from 'constants/keys';
import START_GAME from 'actions/start-game';
import SNAKE_MOVES from 'actions/snake-moves';
import KEY_PRESSED from 'actions/key-pressed';
import SNAKE_EATS from 'actions/snake-eats';

const initialState = {
  x: gameDimensions.WIDTH / 2,
  y: gameDimensions.HEIGHT / 2,
  vector: {
    x: 1,
    y: 0,
    locked: false
  },
  body: [{
    x: -1,
    y: 0
  }, {
    x: -1,
    y: 0
  }, {
    x: -1,
    y: 0
  }, {
    x: -1,
    y: 0
  }, {
    x: -1,
    y: 0
  }],
  justAte: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_GAME:
      return initialState;
    case SNAKE_MOVES:
      return {
        ...state,
        x: state.x + (state.vector.x * gameResolution),
        y: state.y + (state.vector.y * gameResolution),
        body: [
          {
            x: state.vector.x * -1,
            y: state.vector.y * -1
          },
          ...state.body.slice(0, state.body.length - (state.justAte ? 0 : 1))
        ],
        vector: {
          ...state.vector,
          locked: false
        },
        justAte: false
      };
    case SNAKE_EATS:
      return {
        ...state,
        justAte: true
      };
    case KEY_PRESSED: {
      const vector = {
        ...state.vector
      };

      if (!vector.locked && vector.x !== 0 && [keys.UP, keys.DOWN].indexOf(action.payload) > -1) {
        vector.x = 0;
        vector.y = action.payload === keys.UP ? -1 : 1;
        vector.locked = true;
      }

      if (!vector.locked && vector.y !== 0 && [keys.LEFT, keys.RIGHT].indexOf(action.payload) > -1) {
        vector.y = 0;
        vector.x = action.payload === keys.LEFT ? -1 : 1;
        vector.locked = true;
      }

      return {
        ...state,
        vector
      };
    }
    default:
      return state;
  }
};

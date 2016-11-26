import initialSnakeState from 'constants/initial-snake-state';
import gameResolution from 'constants/game-resolution';
import actionTypes from 'constants/action-types';

export default (state = initialSnakeState, action = {}) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return initialSnakeState;
    case actionTypes.SNAKE_MOVES:
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
        justAte: false
      };
    case actionTypes.SNAKE_EATS:
      return {
        ...state,
        justAte: true
      };
    case actionTypes.KEY_UP_PRESSED: {
      if (state.body[0].y === -1) {
        return state;
      }

      return {
        ...state,
        vector: {
          x: 0,
          y: -1
        }
      };
    }
    case actionTypes.KEY_DOWN_PRESSED: {
      if (state.body[0].y === 1) {
        return state;
      }

      return {
        ...state,
        vector: {
          x: 0,
          y: 1
        }
      };
    }
    case actionTypes.KEY_LEFT_PRESSED:
      if (state.body[0].x === -1) {
        return state;
      }

      return {
        ...state,
        vector: {
          x: -1,
          y: 0
        }
      };
    case actionTypes.KEY_RIGHT_PRESSED:
      if (state.body[0].x === 1) {
        return state;
      }

      return {
        ...state,
        vector: {
          x: 1,
          y: 0
        }
      };
    default:
      return state;
  }
};

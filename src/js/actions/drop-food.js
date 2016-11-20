import actionTypes from 'constants/action-types';
import gameDimensions from 'constants/game-dimensions';
import gameResolution from 'constants/game-resolution';

export default () => ({
  type: actionTypes.DROP_FOOD,
  payload: {
    x: Math.floor(Math.random() * (gameDimensions.WIDTH / gameResolution)),
    y: Math.floor(Math.random() * (gameDimensions.HEIGHT / gameResolution))
  }
});

import DROP_FOOD from 'actions/drop-food';
import gameDimensions from 'constants/game-dimensions';
import gameResolution from 'constants/game-resolution';

export default () => ({
  type: DROP_FOOD,
  payload: {
    x: Math.floor(Math.random() * (gameDimensions.WIDTH / gameResolution)),
    y: Math.floor(Math.random() * (gameDimensions.HEIGHT / gameResolution))
  }
});

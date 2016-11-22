import { createSelector } from 'reselect';

import gameResolution from 'constants/game-resolution';
import getSnake from 'selectors/get-snake';

// TODO: this should return an array of all body elements to draw
export default createSelector(
  getSnake,
  snake => snake.body.reduce((body, part) => [
    ...body, {
      x: body[body.length - 1].x + (part.x * gameResolution),
      y: body[body.length - 1].y + (part.y * gameResolution)
    }
  ], [{
    x: snake.x,
    y: snake.y
  }])
);

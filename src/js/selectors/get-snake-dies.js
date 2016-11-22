import { createSelector } from 'reselect';

import gameDimensions from 'constants/game-dimensions';
import getSnakeBody from 'selectors/get-snake-body';

export default createSelector(
  getSnakeBody,
  (snakeBody) => {
    const head = snakeBody[0];
    return snakeBody.slice(1).some(part => part.x === head.x && part.y === head.y) ||
      head.x < 0 || head.x >= gameDimensions.WIDTH || head.y < 0 || head.y >= gameDimensions.HEIGHT;
  }
);

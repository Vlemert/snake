import React from 'react';

import gameDimensions from 'constants/game-dimensions';

export default () => (
  <canvas
    className="canvas"
    id="game-canvas"
    width={gameDimensions.WIDTH}
    height={gameDimensions.HEIGHT}
  />
);

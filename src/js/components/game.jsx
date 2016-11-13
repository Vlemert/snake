import React from 'react';

import Score from 'containers/score';
import Canvas from 'components/canvas';

const Game = () => (
  <div className="game">
    <Score />
    <Canvas />
  </div>
);

export default Game;

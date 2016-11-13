import React from 'react';

import oneOf from 'modules/one-of';
import gameState from 'constants/game-state';
import Welcome from 'components/welcome';
import Game from 'components/game';

const App = ({ currentGameState }) => (
  <div className="app">
    {currentGameState === gameState.WELCOME && <Welcome />}
    {currentGameState !== gameState.WELCOME && <Game />}
  </div>
);

App.propTypes = {
  currentGameState: oneOf(gameState).isRequired
};

export default App;

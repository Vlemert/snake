import { combineReducers } from 'redux';

import gameState from './game-state';
import snake from './snake';
import food from './food';
import gameSpeed from './game-speed';
import score from './score';

export default combineReducers({
  gameState,
  snake,
  food,
  gameSpeed,
  score
});

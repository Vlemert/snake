import actionTypes from 'constants/action-types';
import gameStates from 'constants/game-state';
import gameState from '../game-state';

test('Default state is correct', () => {
  expect(gameState()).toMatchSnapshot();
});

test('Handles START_GAME', () => {
  expect(gameState(undefined, {
    type: actionTypes.START_GAME
  })).toBe(gameStates.PLAYING);
});

test('Handles SNAKE_DIED', () => {
  expect(gameState(gameStates.PLAYING, {
    type: actionTypes.SNAKE_DIED
  })).toBe(gameStates.ENDED);
});

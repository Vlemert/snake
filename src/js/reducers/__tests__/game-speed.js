import actionTypes from 'constants/action-types';
import gameSpeed from '../game-speed';

test('Default state is correct', () => {
  expect(gameSpeed()).toMatchSnapshot();
});

test('Handles SNAKE_EATS', () => {
  expect(gameSpeed(4, {
    type: actionTypes.SNAKE_EATS
  })).toBe(5);
});

test('Handles START_GAME', () => {
  expect(gameSpeed(4, {
    type: actionTypes.START_GAME
  })).toBe(1);
});

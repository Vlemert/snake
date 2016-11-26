import actionTypes from 'constants/action-types';
import score from '../score';

test('Default state is correct', () => {
  expect(score()).toMatchSnapshot();
});

test('Handles START_GAME', () => {
  expect(score(100, {
    type: actionTypes.START_GAME
  })).toBe(0);
});

test('Handles SNAKE_EATS', () => {
  expect(score(10, {
    type: actionTypes.SNAKE_EATS
  })).toBe(15);
});

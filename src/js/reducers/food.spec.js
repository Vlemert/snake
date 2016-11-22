import actionTypes from '../constants/action-types';
import food from './food';

test('Default state is correct', () => {
  expect(food()).toMatchSnapshot();
});

test('Handles DROP_FOOD', () => {
  expect(food(undefined, {
    type: actionTypes.DROP_FOOD,
    payload: {
      x: 123,
      y: 321
    }
  })).toEqual({
    x: 123,
    y: 321
  });
});

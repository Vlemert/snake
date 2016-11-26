import { take, put } from 'redux-saga/effects';

import actionTypes from 'constants/action-types';
import dropFood from 'actions/drop-food';
import dropFoodSaga from '../drop-food';

jest.mock('actions/drop-food');

const saga = dropFoodSaga();

for (let i = 0; i < 5; i += 1) {
  test('Dispatches dropFood', () => {
    expect(saga.next()).toEqual({
      done: false,
      value: put(dropFood())
    });
  });

  test('Waits for SNAKE_EATS', () => {
    expect(saga.next()).toEqual({
      done: false,
      value: take(actionTypes.SNAKE_EATS)
    });
  });
}

import { take, put } from 'redux-saga/effects';

import actionTypes from 'constants/action-types';
import dropFood from 'actions/drop-food';

export default function* () {
  while (true) {
    yield put(dropFood());
    yield take(actionTypes.SNAKE_EATS);
  }
}

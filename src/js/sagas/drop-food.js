import { fork, take, put } from 'redux-saga/effects';

import actionTypes from 'constants/action-types';
import dropFood from 'actions/drop-food';

export default function* () {
  yield fork(function* () {
    while (true) {
      yield put(dropFood());
      yield take(actionTypes.SNAKE_EATS);
    }
  });
}

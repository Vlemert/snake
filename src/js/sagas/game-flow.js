import { take, put, fork, cancel } from 'redux-saga/effects';

import actionTypes from 'constants/action-types';
import startGame from 'actions/start-game';
import gameTicker from 'sagas/game-ticker';

export default function* () {
  while (true) {
    yield take(actionTypes.KEY_SPACE_PRESSED);

    yield put(startGame());

    const ticker = yield fork(gameTicker);

    yield take(actionTypes.SNAKE_DIED);

    yield cancel(ticker);
  }
}

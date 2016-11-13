import { take, put, fork, cancel } from 'redux-saga/effects';

import keys from 'constants/keys';
import KEY_PRESSED from 'actions/key-pressed';
import SNAKE_DIED from 'actions/snake-died';
import startGame from 'action-creators/start-game';
import gameTicker from 'sagas/game-ticker';

export default function* () {
  while (true) {
    const keyPress = yield take(KEY_PRESSED);

    if (keyPress.payload !== keys.SPACE) {
      continue;
    }

    yield put(startGame());

    // TODO: fork some stuff to start running the game
    const ticker = yield fork(gameTicker);

    const playerDied = yield take(SNAKE_DIED);

    yield cancel(ticker);

    console.log('he ded');
  }
}

import { fork } from 'redux-saga/effects';

import gameFlow from './game-flow';

export default function* () {
  yield [
    fork(gameFlow)
  ];
}

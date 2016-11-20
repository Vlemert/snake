import { spawn } from 'redux-saga/effects';

import gameFlow from './game-flow';
import keyHandler from './key-handler';

export default function* () {
  yield [
    spawn(gameFlow),
    spawn(keyHandler)
  ];
}

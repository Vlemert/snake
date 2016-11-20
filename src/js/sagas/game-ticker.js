import { delay } from 'redux-saga';
import { put, select, call, fork, take } from 'redux-saga/effects';

import drawGame from 'utils/draw-game';
import dropFood from 'sagas/drop-food';
import snakeMoves from 'actions/snake-moves';
import snakeDied from 'actions/snake-died';
import snakeEats from 'actions/snake-eats';
import getSnakeBody from 'selectors/get-snake-body';
import getFood from 'selectors/get-food';
import getGameSpeed from 'selectors/get-game-speed';
import getSnakeDies from 'selectors/get-snake-dies';

export default function* () {
  const canvas = yield call([document, document.getElementById], 'game-canvas');
  const canvasContext = yield call([canvas, canvas.getContext], '2d');

  yield fork(dropFood);

  while (true) {
    const gameSpeed = yield select(getGameSpeed);

    yield delay(Math.max(100 - (gameSpeed), 25));

    yield put(snakeMoves());

    const snakeDies = yield select(getSnakeDies);
    if (snakeDies) {
      yield put(snakeDied());
    }

    const snakeBody = yield select(getSnakeBody);
    const food = yield select(getFood);

    const head = snakeBody[0];

    if (head.x === food.x && head.y === food.y) {
      yield put(snakeEats());
    }

    yield call(drawGame, canvas.width, canvas.height, canvasContext, food, snakeBody);
  }
}

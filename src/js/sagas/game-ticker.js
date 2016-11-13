import { delay } from 'redux-saga';
import { put, select, call, fork, take } from 'redux-saga/effects';


import gameResolution from 'constants/game-resolution';
import SNAKE_EATS from 'actions/snake-eats';
import dropFood from 'action-creators/drop-food';
import snakeMoves from 'action-creators/snake-moves';
import snakeDied from 'action-creators/snake-died';
import snakeEats from 'action-creators/snake-eats';
import getSnakeBody from 'selectors/get-snake-body';
import getFood from 'selectors/get-food';
import getGameSpeed from 'selectors/get-game-speed';
import getSnakeDies from 'selectors/get-snake-dies';

function drawGame(canvasWidth, canvasHeight, canvasContext, food, snakeBody) {
  const context = canvasContext;
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  context.fillStyle = 'yellow';
  context.fillRect(food.x, food.y, gameResolution, gameResolution);

  for (let i = 0; i < snakeBody.length; i++) {
    const part = snakeBody[i];

    context.fillStyle = 'green';
    context.fillRect(part.x, part.y, gameResolution, gameResolution);
  }
}

export default function* () {
  const canvas = yield call([document, document.getElementById], 'game-canvas');
  const canvasContext = yield call([canvas, canvas.getContext], '2d');

  yield put(dropFood());

  yield fork(function* () {
    while (true) {
      yield take(SNAKE_EATS);
      yield put(dropFood());
    }
  });

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

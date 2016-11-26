import { take, put, fork, cancel } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';

import actionTypes from 'constants/action-types';
import startGame from 'actions/start-game';
import gameTicker from 'sagas/game-ticker';
import gameFlow from '../game-flow';

jest.mock('sagas/game-ticker');

const saga = gameFlow();

describe('when game flow is running', () => {
  for (let i = 0; i < 5; i += 1) {
    test('it waits for KEY_SPACE_PRESSED', () => {
      expect(saga.next()).toEqual({
        done: false,
        value: take(actionTypes.KEY_SPACE_PRESSED)
      });
    });

    test('then it starts the game', () => {
      expect(saga.next()).toEqual({
        done: false,
        value: put(startGame())
      });
    });

    test('then it starts the game ticker', () => {
      expect(saga.next()).toEqual({
        done: false,
        value: fork(gameTicker)
      });
    });

    const mockTask = createMockTask();

    test('then it waits for the snake to die', () => {
      expect(saga.next(mockTask)).toEqual({
        done: false,
        value: take(actionTypes.SNAKE_DIED)
      });
    });

    test('then it cancels the ticker', () => {
      expect(saga.next()).toEqual({
        done: false,
        value: cancel(mockTask)
      });
    });
  }
});

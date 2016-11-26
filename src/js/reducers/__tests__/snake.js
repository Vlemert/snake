import initialSnakeState from 'constants/initial-snake-state';
import gameResolution from 'constants/game-resolution';
import actionTypes from 'constants/action-types';
import snake from '../snake';

test('it has a correct default state', () => {
  expect(snake()).toBe(initialSnakeState);
});

test('it handles GAME_STARTS', () => {
  expect(snake({ stateIsNot: 'initial' }, {
    type: actionTypes.START_GAME
  })).toBe(initialSnakeState);
});

describe('when SNAKE_MOVES', () => {
  const result = snake(undefined, {
    type: actionTypes.SNAKE_MOVES
  });

  test('it correctly changes the position of the snake', () => {
    expect(result.x).toBe(initialSnakeState.x + (initialSnakeState.vector.x * gameResolution));
    expect(result.y).toBe(initialSnakeState.y + (initialSnakeState.vector.y * gameResolution));
  });

  test('it correctly shifts the body of the snake', () => {
    expect(result.body.length).toBe(initialSnakeState.body.length);
    expect(result.body[0]).toEqual({
      x: -initialSnakeState.vector.x,
      y: -initialSnakeState.vector.y
    });
    expect(result.body[result.body.length - 1]).toBe(initialSnakeState.body[initialSnakeState.body.length - 2]);
  });
});

describe('when SNAKE_EATS', () => {
  let result;

  beforeEach(() => {
    result = snake(undefined, {
      type: actionTypes.SNAKE_EATS
    });
  });

  test('it correctly updates justAte', () => {
    expect(result.justAte).toBe(true);
  });

  describe('and then SNAKE_MOVES', () => {
    beforeEach(() => {
      result = snake(result, {
        type: actionTypes.SNAKE_MOVES
      });
    });

    test('it correctly shifts the body on the next move', () => {
      expect(result.body.length).toBe(initialSnakeState.body.length + 1);
      expect(result.body[0]).toEqual({
        x: -initialSnakeState.vector.x,
        y: -initialSnakeState.vector.y
      });
      expect(result.body[result.body.length - 1]).toBe(initialSnakeState.body[initialSnakeState.body.length - 1]);
    });

    test('it correctly resets justAte after moving', () => {
      expect(result.justAte).toBe(false);
    });
  });
});

describe('when KEY_UP_PRESSED', () => {
  let result;

  test('it correctly updates the vector', () => {
    result = snake({
      ...initialSnakeState,
      vector: {
        x: 1,
        y: 0
      },
      body: [{
        x: -1,
        y: 0
      }]
    }, {
      type: actionTypes.KEY_UP_PRESSED
    });

    expect(result.vector.x).toBe(0);
    expect(result.vector.y).toBe(-1);
  });

  test('it will not allow moving in the opposite direction', () => {
    result = snake({
      ...initialSnakeState,
      vector: {
        x: 0,
        y: 1
      },
      body: [{
        x: 0,
        y: -1
      }]
    }, {
      type: actionTypes.KEY_UP_PRESSED
    });

    expect(result.vector.x).toBe(0);
    expect(result.vector.y).toBe(1);
  });
});

describe('when KEY_DOWN_PRESSED', () => {
  let result;

  test('it correctly updates the vector', () => {
    result = snake({
      ...initialSnakeState,
      vector: {
        x: 1,
        y: 0
      },
      body: [{
        x: -1,
        y: 0
      }]
    }, {
      type: actionTypes.KEY_DOWN_PRESSED
    });

    expect(result.vector.x).toBe(0);
    expect(result.vector.y).toBe(1);
  });

  test('it will not allow moving in the opposite direction', () => {
    result = snake({
      ...initialSnakeState,
      vector: {
        x: 0,
        y: -1
      },
      body: [{
        x: 0,
        y: 1
      }]
    }, {
      type: actionTypes.KEY_DOWN_PRESSED
    });

    expect(result.vector.x).toBe(0);
    expect(result.vector.y).toBe(-1);
  });
});

describe('when KEY_LEFT_PRESSED', () => {
  let result;

  test('it correctly updates the vector', () => {
    result = snake({
      ...initialSnakeState,
      vector: {
        x: 0,
        y: -1
      },
      body: [{
        x: 0,
        y: 1
      }]
    }, {
      type: actionTypes.KEY_LEFT_PRESSED
    });

    expect(result.vector.x).toBe(-1);
    expect(result.vector.y).toBe(0);
  });

  test('it will not allow moving in the opposite direction', () => {
    result = snake({
      ...initialSnakeState,
      vector: {
        x: 1,
        y: 0
      },
      body: [{
        x: -1,
        y: 0
      }]
    }, {
      type: actionTypes.KEY_LEFT_PRESSED
    });

    expect(result.vector.x).toBe(1);
    expect(result.vector.y).toBe(0);
  });
});

describe('when KEY_RIGHT_PRESSED', () => {
  let result;

  test('it correctly updates the vector', () => {
    result = snake({
      ...initialSnakeState,
      vector: {
        x: 0,
        y: -1
      },
      body: [{
        x: 0,
        y: 1
      }]
    }, {
      type: actionTypes.KEY_RIGHT_PRESSED
    });

    expect(result.vector.x).toBe(1);
    expect(result.vector.y).toBe(0);
  });

  test('it will not allow moving in the opposite direction', () => {
    result = snake({
      ...initialSnakeState,
      vector: {
        x: -1,
        y: 0
      },
      body: [{
        x: 1,
        y: 0
      }]
    }, {
      type: actionTypes.KEY_RIGHT_PRESSED
    });

    expect(result.vector.x).toBe(-1);
    expect(result.vector.y).toBe(0);
  });
});

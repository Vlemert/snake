import gameDimensions from 'constants/game-dimensions';

export default {
  x: gameDimensions.WIDTH / 2,
  y: gameDimensions.HEIGHT / 2,
  vector: {
    x: 1,
    y: 0
  },
  body: [{
    x: -1,
    y: 0
  }, {
    x: -1,
    y: 0
  }, {
    x: -1,
    y: 0
  }, {
    x: -1,
    y: 0
  }, {
    x: -1,
    y: 0
  }],
  justAte: false
};

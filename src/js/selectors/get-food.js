import gameResolution from 'constants/game-resolution';

export default state => ({
  x: state.food.x * gameResolution,
  y: state.food.y * gameResolution
});

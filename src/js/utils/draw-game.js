import gameResolution from 'constants/game-resolution';

export default function(canvasWidth, canvasHeight, canvasContext, food, snakeBody) {
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

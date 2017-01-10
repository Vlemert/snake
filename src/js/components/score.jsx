import React, { PropTypes } from 'react';

const Score = ({ score, highscore }) => (
  <div className="score">
    SCORE: {score}
    {highscore && (
      <div className="score__high">
        HIGH: {highscore}
      </div>
    )}
  </div>
);

Score.propTypes = {
  score: PropTypes.number,
  highscore: PropTypes.number
};

Score.defaultProps = {
  score: 0,
  highscore: 0
};

export default Score;

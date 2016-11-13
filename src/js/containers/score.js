import { connect } from 'react-redux';

import Score from 'components/score';
import getScore from 'selectors/get-score';

const stateToProps = state => ({
  score: getScore(state)
});

export default connect(stateToProps)(Score);

import { connect } from 'react-redux';

import App from 'components/app';
import getCurrentGameState from 'selectors/get-current-game-state';

const stateToProps = state => ({
  currentGameState: getCurrentGameState(state)
});

export default connect(stateToProps)(App);

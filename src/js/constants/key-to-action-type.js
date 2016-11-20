import keys from 'constants/keys';
import actionTypes from 'constants/action-types';

export default {
  [keys.UP]: actionTypes.KEY_UP_PRESSED,
  [keys.DOWN]: actionTypes.KEY_DOWN_PRESSED,
  [keys.LEFT]: actionTypes.KEY_LEFT_PRESSED,
  [keys.RIGHT]: actionTypes.KEY_RIGHT_PRESSED,
  [keys.SPACE]: actionTypes.KEY_SPACE_PRESSED
};

import { call, take, put } from 'redux-saga/effects';

import keyDownChannel from 'sagas/key-down-channel';
import keyToActionType from 'constants/key-to-action-type';

export default function* keyHandler() {
  const channel = yield call(keyDownChannel);

  while (true) {
    const keyCode = yield take(channel);

    const actionType = keyToActionType[keyCode];

    if (actionType) {
      yield put({
        type: actionType
      });
    }
  }
}

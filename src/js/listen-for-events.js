import keyPressed from 'action-creators/key-pressed';
import store from './store';

export default () => {
  window.addEventListener("keydown", (e) => {
    store.dispatch(keyPressed(e.keyCode));
  });
};


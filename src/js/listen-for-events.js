import keyPressed from 'actions/key-pressed';
import store from './store';

export default () => {
  window.addEventListener("keydown", (e) => {
    store.dispatch(keyPressed(e.keyCode));
  });
};


import { eventChannel } from 'redux-saga';

export default () => eventChannel((emitter) => {
  const handler = e => emitter(e.keyCode);

  window.addEventListener('keydown', handler);

  return () => window.removeEventListener('keydwwn', handler);
});

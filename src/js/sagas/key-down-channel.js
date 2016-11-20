import { eventChannel } from 'redux-saga';

export default () => {
  return eventChannel((emitter) => {
    const handler = e => emitter(e.keyCode);

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydwwn', handler);
  });
};

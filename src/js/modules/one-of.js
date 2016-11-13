import { PropTypes } from 'react';

export default (object) => {
  return PropTypes.oneOf(Object.keys(object).map(key => object[key]));
};

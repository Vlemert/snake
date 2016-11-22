import { PropTypes } from 'react';

export default object => PropTypes.oneOf(Object.keys(object).map(key => object[key]));

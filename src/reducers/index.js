import { combineReducers } from 'redux'
const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const reducers = keys.reduce((memo, key) => {
    memo[key.match(/([^/]+)\.js$/)[1]] = context(key).default;
    return memo;
}, {});
export default combineReducers(reducers);
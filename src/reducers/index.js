import { combineReducers } from 'redux';

import { recommendInfo } from '../datas/now-data-balance';

const rootReducer = combineReducers({
    'default': () => ({}),
    recommendInfo: recommendInfo
});

export default rootReducer;

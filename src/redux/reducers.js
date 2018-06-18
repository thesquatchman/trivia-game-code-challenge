import { combineReducers } from 'redux';

import * as gameReducer from './actions';

const rootReducer = combineReducers({
	game: gameReducer.reducer
});

export default rootReducer;

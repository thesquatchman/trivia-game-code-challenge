import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
	middleware.push(createLogger());
}

export function configureStore(initialState = {}) {
	const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
	return store;
}

export const store = configureStore();

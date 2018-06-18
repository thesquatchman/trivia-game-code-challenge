import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import AppRouter from './src/AppRouter';

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;

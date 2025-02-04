import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers'; // Ensure the correct reducer is imported
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// Create the Redux store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

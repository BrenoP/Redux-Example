import React from 'react';
import List from './List';
import store from './store';
import { Provider } from 'react-redux';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <List />
      </Provider>
    </div>
  );
}

export default App;

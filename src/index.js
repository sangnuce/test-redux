import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);

const App = () => {
  return (<Provider store={store}>
    <Counter/>
  </Provider>);
}

ReactDOM.render(<App />, document.getElementById('root'));

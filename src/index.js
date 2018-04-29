import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import { store, persistor } from './configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Counter />
    </PersistGate>
  </Provider>);
}

ReactDOM.render(<App />, document.getElementById('root'));

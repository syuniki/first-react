import React from 'react';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message, description }) => {
  return (
    <div>
      <Counter />
      <hr />
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  description: 'This is App component.',
};

export default App;

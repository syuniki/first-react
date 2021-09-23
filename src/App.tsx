import React from 'react';

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message, description }) => {
  return <div>{ message }<br />{ description }</div>;
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  description: 'This is App component.',
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App message='Hello, React!'/>,  // Appコンポーネントに message というデータ(プロップス)を渡す
    document.getElementById('root')
);

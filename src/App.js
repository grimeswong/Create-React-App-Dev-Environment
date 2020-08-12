import React from 'react';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <h1>Create React App Base with Sass</h1>
      <h2>Environment Variable = {process.env.REACT_APP_NAME}</h2>
      <h2>Environment API = {process.env.REACT_APP_API}</h2>
    </div>
  );
}

export default App;

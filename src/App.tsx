import './App.css';
import React from 'react';
import Greeting from './Components/Greeting/Typescript/greeting';

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name='John' />
    </div>
  );
}

export default App;

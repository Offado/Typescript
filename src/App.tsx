import './App.css';
import React from 'react';
import Greeting from './Components/Greeting/Typescript/greeting';
import Counter from './Components/Counter/Typescript/counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name='John' />
      <h1>Compteur</h1>
        <Counter />
    </div>
  );
}

export default App;

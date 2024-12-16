import React, { Component } from "react";

// Interface pour les props (vide ici, mais prête à être utilisée)
interface CounterProps {}

// Interface pour l'état du composant
interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  // Initialisation de l'état
  state: CounterState = {
    count: 0,
  };

  // Méthode pour incrémenter le compteur
  increment = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

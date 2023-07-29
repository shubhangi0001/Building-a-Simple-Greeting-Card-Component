import React from 'react';
import GreetingCard from './components/GreetingCard';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Greeting Card App</h1>
      <GreetingCard name="John" greeting="Hello" />
      <GreetingCard name="Alice" greeting="Hi" />
      <GreetingCard name="Bob" greeting="Hey" />
    </div>
  );
}

export default App;

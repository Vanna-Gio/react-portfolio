import './App.css';
import Profile from './Profile';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Counter</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h1>Profile Information</h1>
      <Profile name="Sovanna Ra" role="Frontend Developer Student" />
      <Profile name="Learning Goal" role="React, Frontend Development" />
    </div>
  )
}

export default App;

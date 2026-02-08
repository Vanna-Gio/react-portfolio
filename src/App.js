import './App.css';

import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Contact Form</h1>

      <input 
        type='text'
        value={name}
        placeholder='Your name'
        onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => alert("Submitted!")}>Submit</button>
      <p>Hello {name}</p>
    </div>
  )
}

export default App;

import './App.css';

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (!input) return;

    setTodos([...todos, input]);
    setInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setFeedback("Please fill in all fields ❌");
      return;
    }

    setFeedback("Message sent successfully ✅");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br /><br />

        <button>Send</button>
      </form>

      <p>{feedback}</p>

      <h1>React Todo List</h1>
      <input 
        value={input}
        placeholder='New task'
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
    </div>

    
  );
}

export default App;
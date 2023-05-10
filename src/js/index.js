import React, { useState } from 'react';
import 'index.css';
import Home from './component/home';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks, add a task</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task}{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => deleteTask(index)}
              >
                Trash
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Home;

import React from 'react';
import App from './index';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>To-Do List</h1>
        <App />
      </header>
    </div>
  );
}

export default Home;

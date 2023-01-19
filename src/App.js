import React from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className='main'>
      <div className='todo-app' >
        <TodoList />
      </div>
      <p className='thanks'>Photo by <a href="https://unsplash.com/@domjtalbot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dom Talbot</a> on <a href="https://unsplash.com/s/photos/star-trek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  !</p>
    </div>
  );
}

export default App;
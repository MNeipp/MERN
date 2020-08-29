import React, { useState } from 'react';
import Input from './Components/Input'
import Task from './Components/Task'
import './App.css';

function App() {
  const [tasks, setTask] = useState([])
  return (
    <div className="App my-4 container">
      <Input task = {tasks} setTask = {setTask}/>
      <h2 className="text-dark mt-2">My To-Do List</h2>
      <div className="container d-flex justify-content-center w-50">
      <ul>
        {tasks.map((task, i) => <Task task={task} taskArray={tasks} index={i} setTask={setTask}/>)}
      </ul>
      </div>
    </div>
  );
}

export default App;

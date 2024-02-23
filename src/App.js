import React, { useState } from 'react';
import Task from './components/Task';
import TaskInputForm from './components/InputForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <TaskInputForm onAddTask={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import {Task, addTask, addSubTask, isCompleted} from './Components/Task';
import TaskInputForm from './InputForm';
//import App from './index';

function App(){
  const name ="Jaylon";

  const tasks = [
      {
          id: 1,
          title: "homework",
          description: "improve my To-Do list",
          Subtasks: [
              {
                  id:'sub task 1', title: 'Add subtasks'
              },
              {
                  id: 'subtasks 2', title: 'Improve the UI'
              }
          ],
          completed: false,
      },
      {
          id: 2,
          title: "Placeholder",
          description: "N/A",
          Subtasks: [
              {
                  id:'sub task 1', title: 'Placeholder'
              },
              {
                  id: 'subtasks 2', title: 'Placeholder'
              }
          ],
          completed: false,
      },
      {
          id: 3,
          title: "Placeholder",
          description: "N/A",
          Subtasks: [
              {
                  id:'sub task 1', title: 'Placeholder'
              },
              {
                  id: 'subtasks 2', title: 'Placeholder'
              }
          ],
          completed: false,
      }
  ];
  const taskManager = () => {
      const int = Math.floor(Math.random()*2);
      return tasks[int].title;
  };

  return (
      <div className = "App">
          <h1>This is my First React App</h1>
              Hello {name} you have the task of <h3>{taskManager()}</h3>
      </div>
  )
}

App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTasks([tasks, newTask]);

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
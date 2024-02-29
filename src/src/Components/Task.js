import React from 'react';

const Task = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span>{task.description}</span>
      <button onClick={() => onDelete(task.id)}>X</button>
    </div>
  );
};

const taskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

const addTask = (title) => {
  const newTask = {
    id: createUUID(),
    title,
    subTasks: [],
    completed: false,
  };
  Task.push(newTask);
}

const addSubTask = (taskId, subTaskTitle) => {
  const task = Task.find((t) => t.id === taskId);
  if (task) {
    task.subTasks.push({
      id: createUUID(),
      title: subTaskTitle,
      completed: false,
    });
  }
}

const isCompleted = (id) => {
  const item = Task.find((t) => t.id === id);
  if (item) {
    item.completed = true;
  }
}

function createUUID() {
  return Math.random().toString(36)
}



export {Task, taskList, addTask, addSubTask, isCompleted};
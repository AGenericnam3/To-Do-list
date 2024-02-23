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

export default Task;
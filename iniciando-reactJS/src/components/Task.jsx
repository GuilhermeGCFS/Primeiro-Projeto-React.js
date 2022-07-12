import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="sec-task mb-2">
      <h3>{task.title}</h3>
    </div>
  );
}

export default Task;
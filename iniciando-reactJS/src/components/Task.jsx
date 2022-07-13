import React from 'react';

const Task = ({ task, handleTaskClick }) => {

  return (
    <div className="sec-task mb-2" style={task.completed ? { borderLeft: "10px solid chartreuse" } : {}}>
      <div onClick={() => handleTaskClick(task.id)}>
        <h3>{task.title}</h3>
      </div>
    </div>
  );

  // return (
  //   <div className="sec-task mb-2">
  //     <h3>{task.title}</h3>
  //   </div>
  // );
}

export default Task;
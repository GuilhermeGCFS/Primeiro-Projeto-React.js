import React from 'react';

const Task = ({ task, handleTaskClick }) => {

  return (
    <div className="sec-task mb-2" style={task.completed ? {borderleft: "10px solid chartreuse"} : {}}>
      <h3>{task.title}</h3>
    </div>
  );

  // return (
  //   <div className="sec-task mb-2">
  //     <h3>{task.title}</h3>
  //   </div>
  // );
}

export default Task;
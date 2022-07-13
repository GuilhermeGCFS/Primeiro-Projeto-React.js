import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

  return (
    <div className="sec-task mb-2" style={task.completed ? { borderLeft: "10px solid chartreuse" } : {}}>
      <div onClick={() => handleTaskClick(task.id)}>
        <h3>{task.title}</h3>
      </div>
      <div className="btns">
        <button className="details_task_btn">
          <CgInfo />
        </button>
        <button className="remove_task_btn" onClick={() => handleTaskDeletion(task.id)}>
          <CgClose />
        </button>
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
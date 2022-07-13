import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import {useNavigate} from 'react-router-dom';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  }

  return (
    <div className="sec-task mb-2" style={task.completed ? { borderLeft: "10px solid chartreuse" } : {}}>
      <div onClick={() => handleTaskClick(task.id)}>
        <h3>{task.title}</h3>
      </div>
      <div className="btns">
        <button className="details_task_btn" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
        <button className="remove_task_btn" onClick={() => handleTaskDeletion(task.id)}>
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
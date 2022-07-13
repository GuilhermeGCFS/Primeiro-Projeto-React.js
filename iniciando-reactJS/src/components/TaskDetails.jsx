import React from 'react';
import { useParams } from 'react-router';
import {useNavigate} from 'react-router-dom';

import AddBtn from "./AddBtn";

const TaskDetails = () => {

  const params = useParams();

  const navigate = useNavigate();

  return ( 
    <>
      <div className="getBack_btn" onClick={() => navigate(-1)}>
        <AddBtn>Voltar</AddBtn>
      </div>
      <div className="task_details_content">
        <h4>{params.taskTitle}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
    </>
  );
}

export default TaskDetails;
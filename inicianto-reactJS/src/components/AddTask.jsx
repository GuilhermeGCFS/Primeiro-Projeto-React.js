import React, { useState } from 'react';

import AddBtn from './AddBtn';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
  }

  return ( 
    <>
      <input
        onChange={handleInputChange}
        value={inputData}
        type="text"
        placeholder="Adicionar Tarefa..." />
      <button onClick={handleAddTaskClick}>Adicionar</button>
    </>
  );
} 

export default AddTask;
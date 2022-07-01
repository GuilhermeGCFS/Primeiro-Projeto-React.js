import React from 'react';

import AddBtn from './AddBtn';

const AddTask = () => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    console.log(e);
  }

  return ( 
    <>
      <input onChange={handleInputChange()} type="text" placeholder="Adicionar Tarefa..." />
      <button>Adicionar</button>
    </>
  );
}

export default AddTask;
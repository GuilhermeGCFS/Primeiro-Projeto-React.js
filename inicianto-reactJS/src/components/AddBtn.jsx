import React from 'react';

const AddBtn = ({ children, onClick }) => {
  return ( 
    <button onClick={onClick}>{children}</button>
  );
}

<button>Adicionar</button>

export default AddBtn;
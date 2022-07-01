import React from 'react';

const AddBtn = ({ children, onClick }) => {
  return ( 
    <button onClick={onClick}>{children}</button>
  );
}

export default AddBtn;
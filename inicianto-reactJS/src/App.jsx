import React, { useState } from 'react';

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React',
      completed: true,
    },
    {
      id: '2',
      title: 'Estudar Python',
      completed: false,
    },
    {
      id: '3',
      title: 'Estudar JavaScript',
      completed: false,
    },
    {
      id: '4',
      title: 'Estudar TypeScript',
      completed: false,
    },
    {
      id: '5',
      title: 'Estudar Minha Vida',
      completed: false,
    },
    
  ]);

  return (
    <>
      <div className="containerPage">
        <div className="containerBox">
          <div className="content">
            <div className="sec-one mb-3">
              <h1>Minhas Depressões</h1>
            </div> 
            <div className="sec-two mb-2">
              <AddTask />
              <button>Adicionar</button>
            </div> 
            <div className="sec-three mb-2">
              <Tasks tasks={tasks} />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
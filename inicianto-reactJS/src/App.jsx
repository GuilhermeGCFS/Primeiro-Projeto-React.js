import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import AddBtn from "./components/AddBtn";

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

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  return (
    <>
      <div className="containerPage">
        <div className="containerBox">
          <div className="content">
            <div className="sec-one mb-3">
              <h1>Minhas Depressões</h1>
            </div> 
            <div className="sec-two mb-2">
              <AddTask handleTaskAddition={handleTaskAddition} />
            </div> 
            <div className="sec-three mb-2">
              <Tasks tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
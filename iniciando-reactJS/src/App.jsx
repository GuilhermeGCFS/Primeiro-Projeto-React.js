import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import AddBtn from "./components/AddBtn";
import Header from "./components/Header";

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
      title: 'Melhorar em JavaScript',
      completed: false,
    },
    {
      id: '4',
      title: 'Estudar TypeScript',
      completed: false,
    },
    {
      id: '5',
      title: 'Aumentar meu conhecimento',
      completed: false,
    },
    
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks)
  };

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
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    
    setTasks(newTasks)
  }

  return (
    <>
      <div className="containerPage">
        <div className="containerBox">
          <div className="content">
            <div className="sec-one mb-3">
              <Header />
            </div> 
            <div className="sec-two mb-2">
              <AddTask handleTaskAddition={handleTaskAddition} />
            </div> 
            <div className="sec-three mb-2">
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
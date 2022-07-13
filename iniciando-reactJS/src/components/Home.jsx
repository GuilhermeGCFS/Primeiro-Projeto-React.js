import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import Tasks from "./Tasks";
import AddTask from "./AddTask";

const Home = () => {

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

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limitt=10'
      );

      setTasks(data);
    };

    fetchTask();
  }, []);

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
    </>
  );
}

export default Home;
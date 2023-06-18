import { useState } from "react";

function useTaskList(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  return { tasks, createTask, deleteTask, updateTask };
}

export default useTaskList;

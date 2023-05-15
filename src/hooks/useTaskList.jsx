import { useState, useEffect } from "react";

function useTaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    let parsedTasks;
    try {
      parsedTasks = JSON.parse(storedTasks);
    } catch (error) {
      parsedTasks = null;
      console.error("Error al analizar la cadena JSON de las tareas:", error);
    }

    if (parsedTasks) {
      setTasks(parsedTasks);
    }
  }, []);
  function addTask(name, description) {
    const newTask = {
      id: Date.now(),
      name,
      description,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((task) => task.id !== id))
    );
  }

  function editTask(id, editedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? editedTask : task))
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.map((task) => (task.id === id ? editedTask : task)))
    );
  }

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
  };
}

export default useTaskList;

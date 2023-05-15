// useTaskList.js
import { useState, useEffect } from "react";

function useTaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
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

import React, { useState, useEffect } from "react";
import Task from "./Task";
import useTaskList from "./useTaskList";

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskList([]);
  const handleTaskEdit = (id, updatedTask) => {
    updateTask(id, updatedTask);
  };
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      storedTasks.forEach((task) => createTask(task));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskToggle = (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    updateTask(id, { completed: !updatedTask.completed });
  };

  const handleTaskDelete = (id) => {
    deleteTask(id);
  };

  const handleTaskAdd = () => {
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      description: newTaskDescription,
      completed: false,
    };
    createTask(newTask);
    setNewTaskName("");
    setNewTaskDescription("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Nombre de la tarea"
      />
      <input
        type="text"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        placeholder="Descripción de la tarea"
      />
      <button onClick={handleTaskAdd}>Agregar Tarea</button>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskToggle={handleTaskToggle}
          handleTaskDelete={handleTaskDelete}
          handleTaskEdit={handleTaskEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;

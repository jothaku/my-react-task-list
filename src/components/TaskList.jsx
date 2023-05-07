import { useEffect, useState } from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      return storedTasks;
    } else {
      return [
        {
          id: 1,
          name: "Tarea 1",
          description: "Realizar tarea 1",
          completed: false,
        },
        {
          id: 2,
          name: "Tarea 2",
          description: "Realizar tarea 2",
          completed: true,
        },
        {
          id: 3,
          name: "Tarea 3",
          description: "Realizar tarea 3",
          completed: false,
        },
      ];
    }
  });

  const [newTaskName, setNewTaskName] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleTaskToggle(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function handleTaskDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleTaskAdd() {
    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      description: "Descripción de la nueva tarea",
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskName("");
  }

  function handleTaskEdit(id) {
    const editedTask = tasks.find((task) => task.id === id);
    editedTask.name = prompt("Editar nombre de la tarea:", editedTask.name);
    editedTask.description = prompt(
      "Editar descripción de la tarea:",
      editedTask.description
    );
    setTasks(tasks.map((task) => (task.id === id ? editedTask : task)));
    setEditingTask(null);
  }

  return (
    <div>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Nombre de la tarea"
      />
      <button onClick={handleTaskAdd}>Agregar tarea</button>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task
            task={task}
            handleTaskToggle={handleTaskToggle}
            handleTaskDelete={handleTaskDelete}
          />
          <button onClick={() => setEditingTask(task.id)}>Editar</button>
          {editingTask === task.id && (
            <div>
              <input
                type="text"
                value={task.name}
                onChange={(e) =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, name: e.target.value } : t
                    )
                  )
                }
              />
              <button onClick={() => handleTaskEdit(task.id)}>Guardar</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;

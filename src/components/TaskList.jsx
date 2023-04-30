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

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskToggle={handleTaskToggle}
          handleTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;

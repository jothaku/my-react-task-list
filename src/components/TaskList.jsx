import { useState } from "react";
import Task from "./Task";
import useTaskList from "../hooks/useTaskList";

function TaskList() {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useTaskList();
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function handleTaskAdd(e) {
    e.preventDefault();
    addTask(newTaskName, newTaskDescription);
    setNewTaskName("");
    setNewTaskDescription("");
  }

  return (
    <div>
      <form onSubmit={handleTaskAdd}>
        <label htmlFor="new-task-name">New Task Name:</label>
        <input
          type="text"
          id="new-task-name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          required
          minLength={3}
        />
        <br />
        <label htmlFor="new-task-description">New Task Description:</label>
        <textarea
          id="new-task-description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Add Task</button>
      </form>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task
            task={task}
            handleTaskAction={(action, id, editedTask) => {
              switch (action) {
                case "toggle":
                  toggleTask(id);
                  break;
                case "delete":
                  deleteTask(id);
                  break;
                case "edit":
                  editTask(id, editedTask);
                  break;
                default:
                  break;
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;

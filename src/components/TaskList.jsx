import React, { useState } from "react";
import Task from "./Task";
import useTaskList from "../hooks/useTaskList";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import "../App.css";

function TaskList() {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useTaskList();
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const { colorMode } = useColorMode();

  function handleTaskAdd(e) {
    e.preventDefault();
    addTask(newTaskName, newTaskDescription);
    setNewTaskName("");
    setNewTaskDescription("");
  }

  return (
    <div className="task-list">
      <form onSubmit={handleTaskAdd}>
        <FormControl>
          <FormLabel htmlFor="new-task-name">Nueva Tarea:</FormLabel>
          <Input
            type="text"
            id="new-task-name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            required
            minLength={2}
            size="sm"
            variant="filled"
            _focus={{
              borderColor: "teal.500",
              boxShadow: "0 0 0 1px teal.500",
            }}
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel htmlFor="new-task-description">Descripción:</FormLabel>
          <Textarea
            id="new-task-description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            size="sm"
            variant="filled"
            _focus={{
              borderColor: "teal.500",
              boxShadow: "0 0 0 1px teal.500",
            }}
            rows={2}
            sx={{
              height: "auto",
              resize: "vertical",
              maxHeight: "10rem",
            }}
          />
        </FormControl>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" mb={4}>
            Agregar
          </Button>
        </div>
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

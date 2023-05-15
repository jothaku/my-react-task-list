import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function Task({ task, handleTaskAction }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  function handleToggle() {
    setIsCompleted(!isCompleted);
    handleTaskAction("toggle", task.id);
  }

  function handleDelete() {
    handleTaskAction("delete", task.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    const editedTask = {
      ...task,
      name: editedName,
      description: editedDescription,
    };
    handleTaskAction("edit", task.id, editedTask);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditedName(task.name);
    setEditedDescription(task.description);
  }

  return (
    <div className="task">
      {isEditing ? (
        <div>
          <label htmlFor="edited-name">Name:</label>
          <input
            type="text"
            id="edited-name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="task-input"
          />
          <br />
          <label htmlFor="edited-description">Description:</label>
          <textarea
            id="edited-description"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="task-textarea"
          ></textarea>
          <br />
          <Button colorScheme="blue" onClick={handleSave} mr={2}>
            Guardar
          </Button>
          <Button colorScheme="blue" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleToggle}
          />
          <Button colorScheme="red" onClick={handleDelete} mr={2}>
            Eliminar
          </Button>
          <Button colorScheme="green" onClick={handleEdit}>
            Editar
          </Button>
        </div>
      )}
    </div>
  );
}

export default Task;

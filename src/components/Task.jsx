import React, { useState } from "react";

function Task({ task, handleTaskToggle, handleTaskDelete, handleTaskEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  function handleChange() {
    handleTaskToggle(task.id);
  }

  function handleDelete() {
    handleTaskDelete(task.id);
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleSave() {
    const updatedTask = {
      ...task,
      name: editedName,
      description: editedDescription,
    };
    handleTaskEdit(task.id, updatedTask);
    setEditMode(false);
  }

  return (
    <div>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        <div>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleChange}
            />
            {task.name}
          </label>
          <p>{task.description}</p>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}
    </div>
  );
}

export default Task;

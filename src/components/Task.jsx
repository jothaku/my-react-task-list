import React, { useState } from "react";

function Task({ task, handleTaskAction }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  function handleToggle() {
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
    <div>
      {isEditing ? (
        <div>
          <label htmlFor="edited-name">Name:</label>
          <input
            type="text"
            id="edited-name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <br />
          <label htmlFor="edited-description">Description:</label>
          <textarea
            id="edited-description"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <br />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={handleToggle}>
            {task.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Task;

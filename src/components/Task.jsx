function Task({ task, handleTaskToggle, handleTaskDelete }) {
  function handleChange() {
    handleTaskToggle(task.id);
  }

  function handleDelete() {
    handleTaskDelete(task.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />
        {task.name}
      </label>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default Task;

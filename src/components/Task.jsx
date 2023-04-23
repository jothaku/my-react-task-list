function Task({ task }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={task.completed} />
        {task.name}
      </label>
    </div>
  );
}
export default Task;

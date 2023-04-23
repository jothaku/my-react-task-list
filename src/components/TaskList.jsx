import Task from "./Task";

function TaskList() {
  const tasks = [
    { id: 1, name: "Tarea 1", completed: false },
    { id: 2, name: "Tarea 2", completed: true },
    { id: 3, name: "Tarea 3", completed: false },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <Header />
      <TaskList />
      {/* <Task /> */}
    </div>
  );
}

export default App;

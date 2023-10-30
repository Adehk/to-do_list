import { useState } from "react";
import Content from "./content/Content";
import Input from "./input/Input";
import Select from "./select/Select";

const App = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks") !== null
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [id, setId] = useState(
    localStorage.getItem("id") !== null
      ? JSON.parse(localStorage.getItem("id"))
      : 0
  );
  return (
    <div className="todo">
      <Input id={id} setId={setId} setTasks={setTasks} tasks={tasks} />
      <Select />
      <Content tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;

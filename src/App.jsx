import Content from "./content/Content";
import Input from "./input/Input";
import Select from "./select/Select";

const App = () => {
  const tasks =
    localStorage.getItem("tasks") !== null
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  return (
    <div className="todo">
      <Input />
      <Select />
      <Content tasks={tasks} />
    </div>
  );
};

export default App;

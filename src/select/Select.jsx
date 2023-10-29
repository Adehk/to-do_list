import { useState } from "react";

const Select = ({ setTasks }) => {
  const [select, setselect] = useState("All");
  return (
    <select
      className="todo__options"
      onClick={(e) => setselect(e.target.value)}
    >
      <option value="all">Все</option>
      <option value="active">Активные</option>
      <option value="completed">Завершённые</option>
    </select>
  );
};

export default Select;

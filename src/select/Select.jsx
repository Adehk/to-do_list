const Select = ({ tasks }) => {
  return (
    <select className="todo__options">
      <option value="all">Все</option>
      <option value="active">Активные</option>
      <option value="completed">Завершённые</option>
    </select>
  );
};

export default Select;

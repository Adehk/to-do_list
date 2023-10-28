const Task = ({ value, id, date, setTasks, completed }) => {
  const handleDeleteTask = (id) =>
    setTasks((prev) => prev.filter((item) => item.id !== id));
  const handleCompleteTask = (id) =>
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !false } : item
      )
    );
  return (
    <div>
      <span className="todo__task">{value}</span>
      <span
        className="todo__action todo__action_complete"
        onClick={() => handleCompleteTask(id)}
      ></span>
      <span
        className="todo__action todo__action_delete"
        onClick={() => handleDeleteTask(id)}
      ></span>
      <div className="todo__date">{date}</div>
    </div>
  );
};

export default Task;

const Task = ({ value, id, date, setTasks }) => {
  const handleDeleteTask = (id) => console.log(id);
  const handleCompleteTask = (id) => console.log(id);
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

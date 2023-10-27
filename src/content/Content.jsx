import Task from "../task/Task";

const Content = ({ tasks, setTasks }) => {
  return (
    <ul className="todo__items">
      {tasks.map((task) => (
        <div className="todo__item" key={task.id}>
          <Task
            value={task.value}
            id={task.id}
            date={new Date().toLocaleString().slice(0, -3)}
            setTasks={setTasks}
          />
        </div>
      ))}
    </ul>
  );
};

export default Content;

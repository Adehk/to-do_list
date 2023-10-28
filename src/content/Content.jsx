import Task from "../task/Task";

const Content = ({ tasks, setTasks }) => {
  return (
    <ul className="todo__items">
      {tasks.map(({ id, value, completed }) => (
        <div
          className={"todo__item" + (completed === true ? " completed" : "")}
          key={id}
        >
          <Task
            value={value}
            id={id}
            date={new Date().toLocaleString().slice(0, -3)}
            completed={completed}
            setTasks={setTasks}
          />
        </div>
      ))}
    </ul>
  );
};

export default Content;

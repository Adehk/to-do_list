import Task from "../task/Task";

const Content = (props) => {
  return (
    <ul className="todo__items">
      {props.tasks.map((task) => (
        <div className="todo__item" key={task.id}>
          <Task
            value={task.value}
            id={task.id}
            date={new Date().toLocaleString().slice(0, -3)}
          />
        </div>
      ))}
    </ul>
  );
};

export default Content;

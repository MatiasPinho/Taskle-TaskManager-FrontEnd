import Icon from "../../../../../assets/icons/icon";
import "./TaskHeaderBottom.css";
export const TaskHeaderBottom = () => {
  return (
    <div className="tasks__header-bottom">
      <span className="task__filter">
        <Icon name="allTasks" width={25} height={25} fill="#040048" />
        All
      </span>
      <span className="task__filter">
        <Icon name="progress" width={25} height={25} />
        In progress
      </span>
      <span className="task__filter">
        <Icon name="done" width={25} height={25} fill="#040048" />
        Done
      </span>
    </div>
  );
};

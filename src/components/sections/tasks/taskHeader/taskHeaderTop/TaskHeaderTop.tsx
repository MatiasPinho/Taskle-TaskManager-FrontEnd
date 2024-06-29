import Icon from "../../../../../assets/icons/icon";
import "./TaskHeaderTop.css";
export const TaskHeaderTop = () => {
  return (
    <div className="tasks__header-top">
      <div className="tasks__controls">
        <div className="tasks__filters">
          <Icon name="users" width={25} height={25} />
          <Icon name="filters" width={25} height={25} />
        </div>
        <button className="tasks__new-task">
          New Task
          <Icon name="plusAlternative" width={20} height={20} fill="#040048" />
        </button>
      </div>
    </div>
  );
};

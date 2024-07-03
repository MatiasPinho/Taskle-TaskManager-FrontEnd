import Icon from "../../../../../assets/icons/icon";
import { Link } from "react-router-dom";
import "./TaskHeaderTop.css";
export const TaskHeaderTop = () => {
  return (
    <div className="tasks__header-top">
      <div className="tasks__controls">
        <div className="tasks__filters">
          <Icon name="users" width={25} height={25} />
          <Icon name="filters" width={25} height={25} />
        </div>
        <Link to="newTask" className="tasks__new-task button--active">
          New Task
          <Icon name="plusAlternative" width={20} height={20} fill="#040048" />
        </Link>
      </div>
    </div>
  );
};

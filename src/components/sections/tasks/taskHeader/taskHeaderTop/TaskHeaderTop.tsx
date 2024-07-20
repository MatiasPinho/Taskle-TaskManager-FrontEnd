import { Link } from "react-router-dom";
import "./TaskHeaderTop.css";
import Icon from "../../../../../assets/icons/icon";

import { FilterDropdown } from "../../../../common/filters/filterDropdown/FilterDropwdown";
interface TaskHeaderTopProps {
  mode: string | null | undefined;
  setMode: (mode: { mode: string | null | undefined }) => void;
}

export const TaskHeaderTop = ({ mode, setMode }: TaskHeaderTopProps) => {
  console.log("soy el componente renderizado");
  return (
    <div className="tasks__header-top scale-in-center">
      <div className="tasks__controls">
        <FilterDropdown mode={mode} setMode={setMode} />
        <Link to="newTask" className="tasks__new-task button--active">
          New Task
          <Icon name="plusAlternative" width={20} height={20} fill="#040048" />
        </Link>
      </div>
    </div>
  );
};

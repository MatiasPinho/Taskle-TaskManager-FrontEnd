import Icon from "../../../../../assets/icons/icon";
import { Link } from "react-router-dom";
import "./TaskHeaderTop.css";

interface TaskHeaderTopProps {
  mode: string | null | undefined;
  setMode: (mode: { mode: string | null | undefined }) => void;
}

export const TaskHeaderTop = ({ mode, setMode }: TaskHeaderTopProps) => {
  const handleViewModel = () => {
    setMode({ mode: mode !== "list" ? "list" : "panel" });
    console.log("soy la funcion que cambia el modo de verse");
  };
  console.log("soy el componente renderizado");
  return (
    <div className="tasks__header-top scale-in-center">
      <div className="tasks__controls">
        <div className="tasks__filters">
          <Icon name="users" width={25} height={25} />
          <Icon
            onClick={handleViewModel}
            name="filters"
            width={25}
            height={25}
          />
        </div>
        <Link to="newTask" className="tasks__new-task button--active">
          New Task
          <Icon name="plusAlternative" width={20} height={20} fill="#040048" />
        </Link>
      </div>
    </div>
  );
};

import "./TaskHeader.css";
import { TaskHeaderBottom } from "./taskHeaderBottom/TaskHeaderBottom";
import { TaskHeaderTop } from "./taskHeaderTop/TaskHeaderTop";
export const TaskHeader = ({ mode, setMode }) => {
  return (
    <>
      <header className="tasks__header">
        <TaskHeaderTop mode={mode} setMode={setMode} />
        <TaskHeaderBottom />
      </header>
    </>
  );
};

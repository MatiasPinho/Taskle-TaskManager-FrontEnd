
import "./TaskHeader.css"
import { TaskHeaderBottom } from "./taskHeaderBottom/TaskHeaderBottom";
import { TaskHeaderTop } from "./taskHeaderTop/TaskHeaderTop";
export const TaskHeader = () => {
  return (
    <>
    <header className="tasks__header">
     <TaskHeaderTop/>
      <TaskHeaderBottom/>
    </header>
    </>
  );
};

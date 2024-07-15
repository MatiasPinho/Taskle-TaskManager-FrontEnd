import "./TaskHeader.css";
import { TaskHeaderBottom } from "./taskHeaderBottom/TaskHeaderBottom";
import { TaskHeaderTop } from "./taskHeaderTop/TaskHeaderTop";

interface TaskHeaderProps {
  mode: string | null;
  setMode: (mode: { mode: string | null | undefined }) => void;
}

export const TaskHeader = ({ mode, setMode }: TaskHeaderProps) => {
  return (
    <header className="tasks__header">
      <TaskHeaderTop mode={mode} setMode={setMode} />
      <TaskHeaderBottom />
    </header>
  );
};

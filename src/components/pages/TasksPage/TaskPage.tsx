import { useSearchParams } from "react-router-dom";
import { TaskHeader } from "../../sections/tasks/taskHeader/TaskHeader";
import { TaskList } from "../../sections/tasks/taskList/TaskList";
import "./TasksPage.css";

export const TaskPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode: string | null = searchParams.get("mode");

  return (
    <section className={`tasks`}>
      <TaskHeader mode={mode} setMode={setSearchParams} />
      <TaskList mode={mode} />
    </section>
  );
};

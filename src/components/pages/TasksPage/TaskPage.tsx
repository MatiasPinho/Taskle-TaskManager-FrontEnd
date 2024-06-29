import { TaskHeader } from "../../sections/tasks/taskHeader/TaskHeader";
import { TaskList } from "../../sections/tasks/taskList/TaskList";

import "./TasksPage.css";

export const TaskPage = () => {
  return (
    <section className={`tasks`}>
      <TaskHeader />
      <TaskList />
    </section>
  );
};

import { useEffect } from "react";
import { TaskCard } from "../taskCard/TaskCard";
import userInfoTasks from "../../../../data/userInfoTasks.json";
import "./TaskList.css";

interface TaskModeProps {
  mode: string | null;
  setMode?: (mode: string | null) => void;
}

export const TaskList = ({ mode }: TaskModeProps) => {
  useEffect(() => {
    const taskCards = document.querySelectorAll<HTMLElement>(".task-card");

    taskCards.forEach((card, index) => {
      card.style.transitionDelay = 0 + "ms";
      card.style.opacity = "0";
      setTimeout(() => {
        index === 0
          ? (card.style.transitionDelay = 40 + "ms")
          : (card.style.transitionDelay = index * 120 + "ms");

        const cardComputed = window.getComputedStyle(card);
        const cardComputedIf =
          cardComputed.getPropertyValue("transition-delay");
        if (cardComputedIf) {
          card.style.opacity = "1";
        }
      }, 2);
    });
  }, [mode, userInfoTasks]); // Dependencias optimizadas
  console.log(mode);
  return (
    <section className={`taskList ${mode === "list" ? "taskList--list" : ""}`}>
      {userInfoTasks.map(
        ({
          title,
          paragraph,
          category,
          endTask,
          comentaryNumber,
          id,
          priority,
          comentaryList,
          status,
        }) => (
          <TaskCard
            key={id}
            title={title}
            paragraph={paragraph}
            category={category}
            comentaryNumber={comentaryNumber}
            id={id}
            priority={priority}
            endTask={endTask}
            mode={mode}
            comentaryList={comentaryList}
            status={status}
          />
        )
      )}
    </section>
  );
};

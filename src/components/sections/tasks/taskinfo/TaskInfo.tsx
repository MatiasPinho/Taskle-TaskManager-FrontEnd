import { useParams } from "react-router-dom";
import "./taskInfo.css";
import useInfoTasks from "../../../../data/userInfoTasks.json";

import { TaskCard } from "../taskCard/TaskCard";

// Hay que comparar si userinfoTasks contiene el id que se pasa en el params(id de la card), si lo contiene, retornamos todos esos datos en una card nueva, de lo contrario, mandamos un error
export const TaskInfo = () => {
  const { taskId } = useParams();

  const results = useInfoTasks.filter((card) => {
    return card.id === Number(taskId);
  });

  return (
    <section className="task__info">
      {results.length > 0 ? (
        results.map(
          ({
            title,
            paragraph,
            endTask,
            category,
            comentaryNumber,
            id,
            priority,
          }) => {
            return (
              <TaskCard
                key={id}
                title={title}
                paragraph={paragraph}
                category={category}
                comentaryNumber={comentaryNumber}
                id={id}
                priority={priority}
                endTask={endTask}
              />
            );
          }
        )
      ) : (
        <h1>Error not cards</h1>
      )}
    </section>
  );
};

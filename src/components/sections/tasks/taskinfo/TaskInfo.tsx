import { useParams } from "react-router-dom";
import "./taskInfo.css";
import useInfoTasks from "../../../../data/userInfoTasks.json";

// Hay que comparar si userinfoTasks contiene el id que se pasa en el params(id de la card), si lo contiene, retornamos todos esos datos en una card nueva, de lo contrario, mandamos un error
export const TaskInfo = () => {
  const { taskId } = useParams();

  const results = useInfoTasks.filter((card) => {
    return card.id === Number(taskId);
  });

  return (
    <section className="task__info">
      {results.length > 0 ? <h1>Error not cards</h1> : "nada"}
    </section>
  );
};

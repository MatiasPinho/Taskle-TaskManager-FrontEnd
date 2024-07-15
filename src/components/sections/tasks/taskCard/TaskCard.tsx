import Icon from "../../../../assets/icons/icon";

import "./TaskCard.css";
import { Link } from "react-router-dom";

type PriorityType = string;
type comentaryListType = {
  name: string;
  comentarys: string[];
};
interface TaskCardProps {
  title: string;
  paragraph: string;
  category: string;
  comentaryNumber: string;
  id: number;
  priority: PriorityType;
  startTask?: string;
  endTask: string;
  mode: string | null;
  status: string;
  comentaryList: comentaryListType[];
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (date: string): string => {
  const [, month, day] = date.split("-");
  const monthIndex = parseInt(month, 10) - 1;

  if (monthIndex >= 0 && monthIndex < 12) {
    return `${monthNames[monthIndex]} ${day}`;
  }

  return "";
};

export const TaskCard = ({
  title,
  paragraph,
  category,
  comentaryNumber,
  id,
  priority,

  endTask,
  mode,
  comentaryList,
  status,
}: TaskCardProps) => {
  const getPriorityLabel = (priority: PriorityType): string => {
    switch (priority) {
      case "High":
        return "task-card__priority--high";
      case "Medium":
        return "task-card__priority--medium";
      case "Low":
        return "task-card__priority--low";
      default:
        return "";
    }
  };

  const getStatusLabel = (status: PriorityType): string => {
    switch (status) {
      case "Done":
        return "task-card__status--done";
      case "Progress":
        return "task-card__status--progress";
      case "All":
        return "task-card__status--all";
      default:
        return "";
    }
  };

  return (
    <Link
      to={`./taskInfo/${id}`}
      className={`task-card ${mode === "list" ? "task-card--list" : ""} `}
    >
      <div className="task-card__info">
        <h2 className="task-card__title">{title}</h2>
        <p
          className={`task-card__paragraph ${
            mode ? "task-card__paragraph--list" : ""
          }`}
        >
          {`${mode === "list" ? paragraph : paragraph.slice(0, 81) + "..."}`}
        </p>
        <div className="task-card__category-controls">
          <p className="task-card__category">{category}</p>
          <span className="task-card__controls">
            <Icon name="edit" height={25} width={25} />
            <Icon name="trash" height={25} width={25} />
          </span>
        </div>
      </div>
      <aside className="task-card__social-date">
        <div className="task-card__comentary__priority">
          <span className="task-card__comentary-info">
            <Icon name="comentary" width={25} height={25} />
            {comentaryNumber}
          </span>

          {mode === "list"
            ? comentaryList.slice(0, 2).map(({ name, comentarys }) => {
                return (
                  <>
                    <aside className="task-card__comentary--list">
                      <span className="task-card__comentary-img-paragraph">
                        <img
                          className="task-card__comentary-image"
                          src="./images/generic_pic.webp"
                          alt=""
                        />
                        <p className="task-card__comentary-name">{name}:</p>
                      </span>

                      <div className="task-card__comentary-paragraphs">
                        {comentarys.slice(0, 1).map((comentary) => {
                          return <p>{comentary}</p>;
                        })}
                      </div>
                    </aside>
                  </>
                );
              })
            : ""}

          <div className="task-card__priority-status">
            <p className={`task-card__priority ${getPriorityLabel(priority)}`}>
              {priority}
            </p>
            <p className={`task-card__priority ${getStatusLabel(status)}`}>
              {status}
            </p>
          </div>
        </div>
        <span className="task-card__date">
          <Icon name="calendarAlternative" width={25} height={25} />
          {formatDate(endTask)}
        </span>
      </aside>
    </Link>
  );
};

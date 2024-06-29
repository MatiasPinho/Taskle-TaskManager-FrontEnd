import Icon from "../../../../assets/icons/icon";
import "./TaskCard.css";
interface TaskCardProps {
  title: string;
  paragraph: string;
  category: string;
  date: string;
  comentary: string;
}
export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  paragraph,
  category,
  date,
  comentary,
}) => {
  return (
    <article className="task-card">
      <div className="task-card__info">
        <h2 className="task-card__title">{title}</h2>
        <p className="task-card__paragraph">{paragraph}</p>
        <div className="task-card__category-controls">
          <p className="task-card__category">{category}</p>
          <span className="task-card__controls">
            <Icon name="edit" height={25} width={25} />
            <Icon name="trash" height={25} width={25} />
          </span>
        </div>
      </div>
      <aside className="task-card__social-date">
        <span className="task-card__comentary">
          <Icon name="comentary" width={25} height={25} />
          {comentary}
        </span>
        <span className="task-card__date">
          <Icon name="calendarAlternative" width={25} height={25} />
          {date}
        </span>
      </aside>
    </article>
  );
};

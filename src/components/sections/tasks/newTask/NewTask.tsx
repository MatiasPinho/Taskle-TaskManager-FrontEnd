import Icon from "../../../../assets/icons/icon";
import "./NewTask.css";

export const NewTask = () => {
  return (
    <section className="new-task">
      <article className="new-task__create">
        <header className="new-task__header">
          <div className="new-task__title-close">
            <h2 className="new-task__title">Create new task</h2>
            <Icon name="close" width={25} height={25} />
          </div>

          <p className="new-task__instructions">
            Please fill out the following fields to add a new task to your list.
            Make sure to provide a clear title and a detailed description.
          </p>
        </header>

        <form className="new-task__form" action="">
          <div className="new-task__label-input">
            <label className="new-task__label" htmlFor="taskTitle">
              Title
            </label>
            <div className="new-task__input-group">
              <input
                className="new-task__input"
                type="text"
                id="taskTitle"
                placeholder="Enter title"
              />
              <p className="new-task__char-count">00/20</p>
            </div>
          </div>
          <div className="new-task__label-input">
            <label className="new-task__label" htmlFor="taskDescription">
              Description
            </label>
            <div className="new-task__input-group">
              <input
                className="new-task__input"
                type="text"
                id="taskDescription"
                placeholder="Enter description"
              />
              <p className="new-task__char-count">00/80</p>
            </div>
          </div>
          <div className="new-task__label-input">
            <label className="new-task__label" htmlFor="taskCategory">
              Category
            </label>
            <div className="new-task__input-group">
              <input
                className="new-task__input"
                type="text"
                id="taskCategory"
                placeholder="Enter category"
              />
              <p className="new-task__char-count">00/20</p>
            </div>
          </div>
          <div className="new-task__label-input new-task__label-input-alternative">
            <label className="new-task__label" htmlFor="taskPriority">
              Priority:
            </label>
            <select
              className="new-task__select"
              id="taskPriority"
              name="taskPriority"
            >
              <option className="new-task__option" value="low">
                Low
              </option>
              <option className="new-task__option" value="medium">
                Medium
              </option>
              <option className="new-task__option" value="high">
                High
              </option>
            </select>
          </div>

          <div className="new-task__date-group">
            <div className="new-task__date-field">
              <label className="new-task__label" htmlFor="startDate">
                Start date
              </label>
              <input className="new-task__input" type="date" id="startDate" />
            </div>
            <div className="new-task__date-field">
              <label className="new-task__label" htmlFor="endDate">
                End date
              </label>
              <input className="new-task__input" type="date" id="endDate" />
            </div>
          </div>
          <div className="new-task__buttons">
            <button className="new-task__button new-task__button--cancel">
              Cancel
            </button>
            <button className="new-task__button new-task__button--create">
              Create Task
            </button>
          </div>
        </form>
      </article>
      <article className="new-task__share">
        <header className="new-task__header">
          <div className="new-task__title-close">
            <h2 className="new-task__title">Invite a team member</h2>
            <Icon name="close" width={25} height={25} />
          </div>

          <p className="new-task__instructions">
            Add your teammate to your team and start working togheter on getting
            donel
          </p>
        </header>
        <form action=""></form>
      </article>
    </section>
  );
};

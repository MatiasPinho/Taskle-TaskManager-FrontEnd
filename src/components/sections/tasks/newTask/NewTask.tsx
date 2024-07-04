import { Link } from "react-router-dom";
import Icon from "../../../../assets/icons/icon";
import "./NewTask.css";
import React, { useState, ChangeEvent, FormEvent } from "react";

// Define las interfaces para el estado del formulario
interface FormField {
  value: string;
  maxCharacters?: number;
}

interface FormData {
  title: FormField;
  description: FormField;
  category: FormField;
  priority: FormField;
  dateStart: FormField;
  dateEnd: FormField;
}

export const NewTask: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: { value: "", maxCharacters: 20 },
    description: { value: "", maxCharacters: 80 },
    category: { value: "", maxCharacters: 20 },
    priority: { value: "" },
    dateStart: { value: "" },
    dateEnd: { value: "" },
  });

  const initialStateForm = useState(formData)[0];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: {
        ...prevFormData[name as keyof FormData],
        value,
      },
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialStateForm);
  };

  return (
    <section className="new-task">
      <article className="new-task__create">
        <header className="new-task__header">
          <div className="new-task__title-close">
            <h2 className="new-task__title">Create new task</h2>
            <Link to="/tasks">
              <Icon name="close" width={25} height={25} />
            </Link>
          </div>

          <p className="new-task__instructions">
            Please fill out the following fields to add a new task to your list.
            Make sure to provide a clear title and a detailed description.
          </p>
        </header>

        <form className="new-task__form" onSubmit={handleSubmit}>
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
                name="title"
                value={formData.title.value}
                onChange={handleInputChange}
              />
              <p
                className={`new-task__char-count ${
                  formData.title.value.length > formData.title.maxCharacters!
                    ? "new-task__char-count--exceeded"
                    : ""
                }`}
              >
                {formData.title.value.length}/{formData.title.maxCharacters}
              </p>
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
                name="description"
                value={formData.description.value}
                onChange={handleInputChange}
              />
              <p
                className={`new-task__char-count ${
                  formData.description.value.length >
                  formData.description.maxCharacters!
                    ? "new-task__char-count--exceeded"
                    : ""
                }`}
              >
                {formData.description.value.length}/
                {formData.description.maxCharacters}
              </p>
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
                value={formData.category.value}
                name="category"
                onChange={handleInputChange}
              />
              <p
                className={`new-task__char-count ${
                  formData.category.value.length >
                  formData.category.maxCharacters!
                    ? "new-task__char-count--exceeded"
                    : ""
                }`}
              >
                {formData.category.value.length}/
                {formData.category.maxCharacters}
              </p>
            </div>
          </div>
          <div className="new-task__label-input new-task__label-input-alternative">
            <label className="new-task__label" htmlFor="taskPriority">
              Priority:
            </label>
            <select
              className="new-task__select"
              id="taskPriority"
              name="priority"
              value={formData.priority.value}
              onChange={handleInputChange}
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
              <input
                className="new-task__input"
                type="date"
                id="startDate"
                name="dateStart"
                value={formData.dateStart.value}
                onChange={handleInputChange}
              />
            </div>
            <div className="new-task__date-field">
              <label className="new-task__label" htmlFor="endDate">
                End date
              </label>
              <input
                className="new-task__input"
                type="date"
                id="endDate"
                value={formData.dateEnd.value}
                name="dateEnd"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="new-task__buttons">
            <button className="new-task__button new-task__button--cancel">
              Cancel
            </button>
            <button
              type="submit"
              className="new-task__button new-task__button--create"
            >
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
            Add your teammate to your team and start working together on getting
            done!
          </p>
        </header>
        <form action=""></form>
      </article>
    </section>
  );
};

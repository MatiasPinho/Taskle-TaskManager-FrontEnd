import Icon from "../../../../assets/icons/icon";
import "./FilterFilter.css";

export const FilterFilter = () => {
  return (
    <div className="filter__menu-filter-container">
      <h4 className="filter__menu-title">Filtrar por</h4>
      <div className="filter__menu-filter-options">
        <span className="filter__menu-filter-option filter-label">
          <span className="filter__menu-date-option">
            <Icon name="calendar" height={25} width={25} />
            Due date
          </span>
          <span className="filter__menu-label-option">
            Predetermined
            <span>↓</span>
          </span>
        </span>
        <span className="filter__menu-filter-option  filter-label">
          <span className="filter__menu-date-option">
            <Icon name="priority" height={25} width={25} />
            Priority
          </span>
          <span className="filter__menu-label-option">
            Predetermined
            <span>↓</span>
          </span>
        </span>
      </div>
    </div>
  );
};

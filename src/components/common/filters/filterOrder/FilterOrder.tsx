import { useState } from "react";
import Icon from "../../../../assets/icons/icon";
import { FilterDeploy } from "../filterDeploy/FilterDeploy";

import "./FilterOrder.css";
export const FilterOrder = () => {
  const [isFilterCLicked, setIsFilterClicked] = useState({
    order: false,
    sense: false,
  });

  const date = [
    "predeterminado",
    "fecha de vencimiento",
    "fecha de adicion",
    "predeterminado",
    "fecha de vencimiento",
    "fecha de adicion",
  ];

  const date2 = ["Ascendente", "Descendente"];

  return (
    <div className="filter__menu-order-container">
      <h4 className="filter__menu-title">Ordenar por</h4>
      <div className="filter__menu-order-options">
        <span
          onClick={() => {
            setIsFilterClicked((prev) => ({
              ...prev,
              order: !prev.order,
              sense: false,
            }));
          }}
          className="filter__menu-order-option  filter-label"
        >
          <span className="filter__menu-order-option-content">
            <Icon name="order" height={25} width={25} />
            Sort by
          </span>
          <span className="filter__menu-order-option-label">
            Name
            <span>↓</span>
          </span>
          <FilterDeploy date={date} active={isFilterCLicked.order && true} />
        </span>
        <span
          onClick={() => {
            setIsFilterClicked((prev) => ({
              ...prev,
              order: false,
              sense: !prev.sense,
            }));
          }}
          className="filter__menu-sense-option  filter-label"
        >
          <span className="filter__menu_sense-option-content">
            <Icon name="sense" height={25} width={25} />
            Sense
          </span>
          <span className="filter__menu-sense-option-label">
            Upward
            <span>↓</span>
          </span>
          <FilterDeploy date={date2} active={isFilterCLicked.sense && true} />
        </span>
      </div>
    </div>
  );
};

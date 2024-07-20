import Icon from "../../../../assets/icons/icon";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiltersMenu } from "../filtersMenu/FiltersMenu";
import "./filterDropwdown.css";
interface TasksFiltersProps {
  mode: string | null | undefined;
  setMode: (mode: { mode: string | null | undefined }) => void;
}

export const FilterDropdown = ({ mode, setMode }: TasksFiltersProps) => {
  const location = useLocation();

  const [toggleMenu, setToggleMenu] = useState({
    userFilter: false,
    toggleFilter: false,
  });
  console.log(toggleMenu.toggleFilter);
  useEffect(() => {
    // Si toggleMenu.toggleFilter estaba abierto, mantenlo abierto
    if (toggleMenu.toggleFilter) {
      setToggleMenu((prev) => ({
        ...prev,
        toggleFilter: true,
      }));
    }
  }, [location.search]);

  const handleToggleFilter = () => {
    setToggleMenu((prev) => ({
      ...prev,
      toggleFilter: !prev.toggleFilter,
    }));
  };

  return (
    <div className="tasks__filters">
      <button className="user__filter__button">
        <Icon name="users" width={25} height={25} />
      </button>

      <div className="view__toggle__button">
        <Icon
          onClick={handleToggleFilter}
          name="filters"
          width={25}
          height={25}
        />
        <FiltersMenu mode={mode} setMode={setMode} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

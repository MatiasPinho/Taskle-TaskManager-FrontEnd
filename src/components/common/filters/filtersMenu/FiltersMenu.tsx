import { FilterFilter } from "../FilterFilter/FilterFilter";
import { FilterModel } from "../FilterModel/FilterModel";
import { FilterOrder } from "../filterOrder/FilterOrder";
import "./FiltersMenu.css";
interface ToggleMenuState {
  userFilter: boolean;
  toggleFilter: boolean;
}

interface TasksFiltersMenuProps {
  mode: string | null | undefined;
  setMode: (mode: { mode: string | null | undefined }) => void;
  toggleMenu: ToggleMenuState;
}

export const FiltersMenu = ({
  mode,
  setMode,
  toggleMenu,
}: TasksFiltersMenuProps) => {
  return (
    <div
      className={`filter__deploy__menu ${
        toggleMenu.toggleFilter ? "filter__deploy__menu--active" : ""
      }`}
    >
      <FilterModel mode={mode} setMode={setMode} />
      <FilterOrder />
      <FilterFilter />
      <div className="filter__menu-delete">
        <button className="filter__menu-delete-button">Reset all</button>
      </div>
    </div>
  );
};

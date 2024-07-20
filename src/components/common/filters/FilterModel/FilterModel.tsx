import Icon from "../../../../assets/icons/icon";
import "./FilterModel.css";
interface TasksFiltersModelMenuProps {
  mode: string | null | undefined;
  setMode: (mode: { mode: string | null | undefined }) => void;
}

export const FilterModel = ({ mode, setMode }: TasksFiltersModelMenuProps) => {
  const handleViewModel = (value: string) => {
    setMode({ mode: value });
  };

  return (
    <div className="filter__deploy__menu-model-container">
      <h4 className="filter__menu-title">Vista</h4>
      <div className="filter__deploy__menu-model">
        <button
          onClick={() => {
            handleViewModel("panel");
          }}
          className={`filter__deploy__menu-model-button ${
            mode === "list" ? "" : "active"
          }`}
        >
          <Icon name="panel" height={30} width={30} />
          <span>Panel</span>
        </button>
        <div
          className={`filter__deploy__menu-model-selector--left ${
            mode === "list" ? "filter__deploy__menu-model-selector--right" : ""
          }`}
        ></div>
        <button
          onClick={() => {
            handleViewModel("list");
          }}
          className={`filter__deploy__menu-model-button ${
            mode === "list" ? "active" : ""
          }`}
        >
          <Icon name="list" height={30} width={30} />
          <span>List</span>
        </button>
      </div>
    </div>
  );
};

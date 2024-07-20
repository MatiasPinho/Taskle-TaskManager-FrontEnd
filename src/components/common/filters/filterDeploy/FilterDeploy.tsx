import "./FilterDeploy.css";

interface dateDeploy {
  date: string[];
  active: boolean;
}
export const FilterDeploy = ({ date, active }: dateDeploy) => {
  console.log(date);
  return (
    <ul className={`filter_deploy ${active ? "active" : ""}`}>
      {date.map((item, index) => (
        <li key={index} className="filter_deploy-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

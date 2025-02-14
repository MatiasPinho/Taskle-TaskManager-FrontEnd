import "./HeaderUserInfo.css";

export const HeaderUserInfo: React.FC = () => {
  const date = new Date();

  const getDayName = (date: Date): string => {
    return date.toLocaleString(navigator.language, { weekday: "short" });
  };

  const getMonthName = (date: Date): string => {
    return date.toLocaleString(navigator.language, { month: "short" });
  };

  const formatNumber = (number: number): string => {
    return number < 10 ? `0${number}` : number.toString();
  };

  const dayName = getDayName(date);
  const monthName = getMonthName(date);
  const day = date.getDate();
  const hours = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());

  const info: string = `${dayName}, ${monthName} ${day} - ${hours}:${minutes}`;

  return (
    <div className="header__user-info">
      <div className="header__greeting-hour">
        <span className="header__greeting">Hey Luis Torri</span>
        <span className="header__hour">{info}</span>
      </div>
    </div>
  );
};

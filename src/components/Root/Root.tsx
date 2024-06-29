import { Outlet } from "react-router-dom";
import { Header } from "../layouts/header/Header";
import { Sidebar } from "../layouts/sidebar/Sidebar";
import { useState } from "react";

export const Root = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <>
      <Header
        isMenuClicked={isMenuClicked}
        setIsMenuClicked={setIsMenuClicked}
      />
      <Sidebar
        isMenuClicked={isMenuClicked}
        setIsMenuClicked={setIsMenuClicked}
      />
      <main
        onClick={() => {
          if (isMenuClicked) {
            setIsMenuClicked(false);
          }
        }}
        className={isMenuClicked ? "main--opacity" : ""}
      >
        <Outlet context={isMenuClicked} />
      </main>
    </>
  );
};

import { Header } from "../layouts/header/Header";
import { Sidebar } from "../layouts/sidebar/Sidebar";
import { useState } from "react";
import { PageTransition } from "./PageTransition";

export const Root = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const sectionElement = document.querySelector("section");
  const body = document.body;
  sectionElement?.classList.contains("page-exit-active")
    ? body.classList.add("body-overflow--special")
    : null;
  const handleMainClick = () => {
    if (isMenuClicked) {
      setIsMenuClicked(false);
    }
  };

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
        onClick={handleMainClick}
        className={isMenuClicked ? "main--opacity" : ""}
      >
        <PageTransition />
      </main>
    </>
  );
};

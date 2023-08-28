import React from "react";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
function NavBar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default NavBar;

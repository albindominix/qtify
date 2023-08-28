import React from "react";
import {ReactComponent as SearchIcon} from "../../assets/Search.svg";
 import styles from './Searchbar.module.css' 
export default function SearchBar() {
  return (
    <div>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder="Search a album of your choice" type="text" />
        <button className={styles.searchButton} type="submit">
         <SearchIcon/>
        </button>
      </form>
    </div>
  );
}

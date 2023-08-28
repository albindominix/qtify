import React from "react";
import styles from "./HeroBanner.module.css";
import Headset from "../../assets/vibrating-headphone 1.png";
function HeroBanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>100 Thousand Songs, ad-free</div>
        <div className={styles.text}>Over thousands podcast episodes</div>
      </div>
      <img src={Headset} width={220} alt="" />
    </div>
  );
}

export default HeroBanner;

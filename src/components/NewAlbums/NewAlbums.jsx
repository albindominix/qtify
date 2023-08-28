import React, { useEffect, useState } from "react";
import styles from "./TopAlbums.module.css";
import axios from "axios";
import Card from "../Card/Card";
function TopAlbums() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://qtify-backend-labs.crio.do/albums/new").then((res) =>
      setData(res.data)
    );
  }, []);

  console.log(data);
  return (
    <div className={styles.wrapper}>
      <h1>Top Albums</h1>
      <div className={styles.card}>
        {data?.length > 0 && data?.map((song) => <Card data={song} />)}
      </div>
    </div>
  );
}

export default TopAlbums;

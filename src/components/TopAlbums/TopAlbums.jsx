import React, { useEffect, useState } from "react";
import styles from "./TopAlbums.module.css";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
function TopAlbums() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://qtify-backend-labs.crio.do/albums/top").then((res) =>
      setData(res.data)
    );
  }, []);
  console.log(data);
  // Configuring the responsive behavior of the carousel based on the device width.
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      slidesToSlide: 6 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 3 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 2
    },
  };

  return (
    <div className={styles.wrapper}>
      <h1>New Albums</h1>
      <Carousel infinite={true} responsive={responsive}>
        {data.length>0 && data?.map((song, index) => (
          <Card data={song} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

export default TopAlbums;

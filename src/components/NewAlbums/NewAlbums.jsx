import React, { useEffect, useState } from "react";
import styles from "./NewAlbums.module.css";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function NewAlbums() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://qtify-backend-labs.crio.do/albums/new").then((res) =>
      setData(res.data)
    );
  }, []);
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
  console.log(data);
  return (
    <div className={styles.wrapper}>
    <h1>New Albums</h1>
    <Carousel infinite={true} responsive={responsive}>
      {data.length>0 &&data?.map((song, index) => (
        <Card data={song} key={index} />
      ))}
    </Carousel>
  </div>
  );
}

export default NewAlbums;

import React from 'react'
import styles from './Card.module.css'
import musicImage from '../../assets/bollywood.png'
import Tooltip from '@mui/material/Tooltip';
function Card({data}) {
  console.log("form card")
  return (
    <Tooltip title={data.songs.length +" songs"} placement="top" arrow>
    <div className={styles.wrapper}>
        <div>
      <img className={styles.image} src={data.image}alt="" />

        </div>
      <div className={styles.lower}>
        <div className={styles.followers}>{data.follows} followers</div>
      </div>

    </div>
    </Tooltip>
  )
}

export default Card

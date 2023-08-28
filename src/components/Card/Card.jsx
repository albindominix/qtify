import React from 'react'
import styles from './Card.module.css'
import musicImage from '../../assets/bollywood.png'
function Card({data}) {
  return (
    <div className={styles.wrapper}>
        <div>
      <img className={styles.image} src={data.image}alt="" />

        </div>
      <div className={styles.lower}>
        <div className={styles.followers}>{data.follows} followers</div>
      </div>

    </div>
  )
}

export default Card

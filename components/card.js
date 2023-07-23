import styles from "../styles/Card.module.css"
import Image from "next/image"


function Card({name, description}) {
  return (
    <div className={styles.container}>
        <div className={styles.outer}>
          {name}

        </div>

    </div>
  )
}

export default Card
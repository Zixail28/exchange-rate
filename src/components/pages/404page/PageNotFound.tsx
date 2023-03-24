import { FC } from 'react'
import styles from "./PageNotFound.module.scss";

const PageNotFound: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Page Not Found</h1>
      <img src="../../../../src/assets/404error.webp" alt="Page Not Found" />
    </div>
  )
}

export default PageNotFound
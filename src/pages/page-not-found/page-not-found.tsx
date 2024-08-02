import { Link } from "react-router-dom";
import styles from './page-not-found.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.block} >
      <h1 className={styles.title}>Страница не найдена</h1>
      <p className={styles.subtitle}>Страница устарела, была удалена или не существовала вовсе</p>
      <Link className={styles.link} to='/'>Перейти на главную</Link>
    </div>
  )
}

export default PageNotFound;
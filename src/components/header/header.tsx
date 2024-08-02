import { NavLink } from "react-router-dom";
import styles from "./header.module.css"

import logoSvg from "./../../assets/img/icons/logo.svg"
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.row}>
            <img src={logoSvg} alt="логотип серконс маркетинг" />

            {/* <div className={styles.nav}>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`}
              >
                <span>Главная</span>
              </NavLink>
              <NavLink
                to='/signature'
                className={({ isActive }) => isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`
                }
              >
                <span>Подпись</span>
              </NavLink>
            </div> */}

            <div className={styles.tutbo}>
              <p className={styles.tutbo__top}>Турбо-ускорение</p>
              <p className={styles.tutbo__center}>подписей электронной почты</p>
              <p className={styles.tutbo__bottom}>Персонализируйте подписи электронной почты до совершенства</p>
            </div>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header;
import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const className = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : "";

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <NavLink to={"/"} className={className}>
            Home
          </NavLink>
          <NavLink to={"/exchange-rate"} className={className}>
            Exchange rate
          </NavLink>
          <NavLink to={"/3213"} className={className}>
            404
          </NavLink>
        </ul>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;

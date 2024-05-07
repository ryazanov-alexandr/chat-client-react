import { Link } from "react-router-dom";
import { Paths } from "../../Paths";

import styles from './Greetings.module.scss';

export const Greetings = () => {
  return (
    <div className={styles.greetings}>
      <h1>Добро пожаловать!</h1>
      <Link className={styles.chatLink} to={Paths.chat}>
        Присоединиться
      </Link>
    </div>
  );
};

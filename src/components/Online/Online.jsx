import { FaUsers } from "react-icons/fa6";
import { OnlineList } from "./OnlineList/OnlineList";

import styles from "./Online.module.scss"; 
import { useOnlineUsers } from "../../hooks/customHooks";

export const Online = ({isShow, close}) => {
  const userCount = useOnlineUsers().length;

  return (
    <section className={`
        ${styles.online}
        ${isShow && styles.show}
      `}>
        <div className={styles.onlineTotal}>
          <span>
            <FaUsers />
          </span>
          <div className={styles.onlineTotalTitle}>
            Онлайн: {userCount}
          </div>
          <div className={styles.onlineClose} onClick={(e) => close(e)}></div>
        </div>
        <OnlineList />
        <div className={styles.onlineFooter}></div>
    </section>
  )
}

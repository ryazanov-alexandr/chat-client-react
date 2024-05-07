import { UserAvatar } from "../../UserAvatar/UserAvatar";
import styles from "./UserInfo.module.scss";

export const UserInfo = ({ user }) => {
  return (
    <div className={styles.userInfo}>
      <UserAvatar src={user.avatar} />
      <div className={styles.userName}>{user.name}</div>


    </div>
  );
};

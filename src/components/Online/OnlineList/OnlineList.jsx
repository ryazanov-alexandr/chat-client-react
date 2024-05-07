import { OnlineUser } from "./OnlineUser/OnlineUser";
import { useOnlineUsers } from "../../../hooks/customHooks";
import styles from "./OnlineList.module.scss";

export const OnlineList = () => {
  const onlineUsers = useOnlineUsers();
  
  return (
    <ul className={styles.onlineList}>
      {onlineUsers.map((user) => <OnlineUser key={user.socketId} user={user}/>)}
    </ul>
  );
};

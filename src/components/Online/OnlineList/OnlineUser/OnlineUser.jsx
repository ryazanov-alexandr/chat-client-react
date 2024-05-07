import styles from './OnlineUser.module.scss';
import { UserAvatar } from '../../../UserAvatar/UserAvatar'

export const OnlineUser = ({ user }) => {
  return (
    <li className={styles.onlineUser}>
        <UserAvatar src={user.avatar}/>
        <div className={styles.onlineUserName}>{user.name}</div>
    </li>
  )
}

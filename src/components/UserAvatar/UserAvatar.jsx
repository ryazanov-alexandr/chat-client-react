import styles from './UserAvatar.module.scss';

export const UserAvatar = ({src}) => {
  return (
    <img className={ styles.userAvatar } src={src} alt='Avatar'/>
  )
}

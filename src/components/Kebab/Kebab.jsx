import styles from './Kebab.module.scss';

export const Kebab = ({onClick}) => {
  return (
    <div className={styles.kebab} onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

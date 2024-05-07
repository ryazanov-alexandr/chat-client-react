import styles from './ImagePreview.module.scss';

export const ImagePreview = ({imageBase64, closePreview}) => {
  return (
    <div className={styles.imagePreviewWrapper}>
        <div className={styles.imagePreviewItem}>
            <img src={imageBase64} className={styles.imagePreview}/>
            <div className={styles.imagePreviewClose} onClick={() => closePreview()}></div>
        </div>
    </div>
  )
}

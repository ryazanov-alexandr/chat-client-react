import styles from "./Message.module.scss";
import Moment from "react-moment";
import { getSrcFromBase64 } from "../../../../utils/utils";
import { useState, useEffect } from "react";

export const Message = ({ message }) => {
  const [imageSrc, setImgSrc] = useState('spinning-dots.svg');

  useEffect(() => {
    console.log('qwe')

    if (!message.imageBase64) return;

    const getImg = async () => {
      const src = await getSrcFromBase64(message.imageBase64);
      setImgSrc(src);
    };

    getImg();
  }, []);

  return (
    <li
      className={`
          ${styles.message}
          ${message.author ? styles.messageLeft : styles.messageRight}
        `}
    >
      <div className={styles.messageInner}>
        {message.author && (
          <span className={styles.author}>{message.author}</span>
        )}
        {message.imageBase64 && <img src={imageSrc} class={styles.messageImage} alt="" />}
        <p className={styles.textWrapper}>
          <span className={styles.text}>{message.text}</span>
          <Moment className={styles.dateTime} format="HH:mm">
            {message.dateTime}
          </Moment>
        </p>
      </div>
    </li>
  );
};

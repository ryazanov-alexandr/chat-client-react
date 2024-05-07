import { Message } from "./Message/Message";
import { useEffect, useRef } from 'react';
import { useMessages, useFeedback } from "../../../hooks/customHooks";

import styles from "./MessageList.module.scss";

export const MessageList = () => {
  const messages = useMessages();
  const feedback = useFeedback();

  const listRef = useRef(null)

  useEffect(() => {
    listRef.current?.scrollIntoView({behavior: "smooth"})
}, [messages, feedback]);

  return (
    <ul className={styles.messageList}>
      {messages.map((message, index) => <Message key={index} message={message}/>)}
      {
        feedback && 
        <li>
            <p className={styles.feedback}>{feedback}</p>
        </li>
      }
      <li ref={listRef}></li>
    </ul>
  );
};

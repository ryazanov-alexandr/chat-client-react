import styles from "./MessageForm.module.scss";
import { FaArrowUp, FaPaperclip } from "react-icons/fa6";
export const MessageForm = ({
  messageText,
  setMessageText,
  sendMessage,
  onBlurInput,
  onChangeFileInput,
  divRef,
}) => {
  return (
    <form className={styles.messageForm}>
      <div
        ref={divRef}
        contentEditable="true"
        type="text"
        name="message"
        className={styles.textInput}
        placeholder="Напишите сообщение..."
        value={messageText}
        onInput={(e) => setMessageText(e.target.textContent)}
        onBlur={() => onBlurInput()}
        onKeyDown={e => !e.shiftKey && e.key === 'Enter' ? sendMessage(e) : ''}
      ></div>
      <input
        type="file"
        name="image"
        id={styles.imageInputId}
        accept=".jpg, .jpeg, .png"
        hidden
        onChange={async (e) => await onChangeFileInput(e.target.files[0])}
      />
      <label htmlFor={styles.imageInputId} className={styles.imageInput}>
        <span>
          <FaPaperclip />
        </span>
      </label>
      <div id="qwe" className={styles.divider}></div>
      <button
        type="submit"
        className={styles.buttonSend}
        onClick={(e) => sendMessage(e)}
      >
        <span>
          <FaArrowUp />
        </span>
      </button>
    </form>
  );
};

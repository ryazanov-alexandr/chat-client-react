import { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.scss";
import { UserInfo } from "./UserInfo/UserInfo";
import { MessageList } from "./MessageList/MessageList";
import { ImagePreview } from "./ImagePreview/ImagePreview";
import { MessageForm } from "./MessageForm/MessageForm";
import { useDispatch } from "react-redux";
import { fileToBase64 } from "../../utils/utils";
import { user as userData } from "../../services/userService/userService";

import {
  sendMessageAction,
  sendFeedbackAction,
} from "../../store/messagesReducer/messagesReducer";

export const Chat = () => {
  const [user, setUser] = useState(userData);

  const [messageText, setMessageText] = useState("");
  const [messageImage, setMessageImage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
  }, [user]);

  const onChangeInput = (messageText) => {
    console.log(messageText);
    setMessageText(messageText);
    dispatch(sendFeedbackAction(`${user.name} набирает сообщение...`));
  };

  const onBlurInput = () => {
    dispatch(sendFeedbackAction(""));
  };

  const handlerSendMessage = (e) => {
    e.preventDefault();

    if(!messageText && !messageImage) return

    const newMessage = {
      author: user.name,
      text: messageText,
      dateTime: new Date(),
      imageBase64: messageImage,
    };

    dispatch(sendMessageAction(newMessage));
    dispatch(sendFeedbackAction(""));

    setMessageText("");
    setMessageImage("");
    console.log(divRef.current.textContent);
    divRef.current.textContent = "";

  };

  const onChangeFileInput = async (file) => {
    try {
      const imageBase64 = await fileToBase64(file);
      setMessageImage(imageBase64);
    } catch (error) {
      console.log(error.message);
    }
  };

  const closeImagePreview = () => {
    setMessageImage("");
  };

  const divRef=useRef();

  return (
    <section className={styles.chat}>
      <UserInfo user={user} />
      <MessageList />
      {messageImage && (
        <ImagePreview
          imageBase64={messageImage}
          closePreview={closeImagePreview}
        />
      )}
      <MessageForm
        divRef={divRef}
        messageText={messageText}
        setMessageText={onChangeInput}
        sendMessage={handlerSendMessage}
        onBlurInput={onBlurInput}
        onChangeFileInput={onChangeFileInput}
      />
    </section>
  );
};

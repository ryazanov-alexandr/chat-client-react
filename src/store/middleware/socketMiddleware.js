import { io } from "socket.io-client";
import { user } from '../../services/userService/userService'
import {
  SEND_FEEDBACK,
  SEND_MESSAGE,
  receiveFeedbackAction,
  receiveMessageAction,
} from "../messagesReducer/messagesReducer";
import {
  SEND_USER,
  receiveUserAction,
  sendUserAction,
} from "../onlineUsersReducer/onlineUsersReducer";

export const socketMiddleware = (url) => {
  return (store) => {
    let socket = io(url);

    socket.on("connect", () => {
      store.dispatch(sendUserAction(user))
    })

    socket.on("chat message", (message) => {
      store.dispatch(receiveMessageAction(message));
    });

    socket.on("feedback", (feedback) => {
      store.dispatch(receiveFeedbackAction(feedback));
    });

    socket.on("connect user", (users) => {
      store.dispatch(receiveUserAction(users));
    });
    return (next) => (action) => {
      switch (action.type) {
        case SEND_MESSAGE:
          socket.emit("chat message", action.payload);
          return next({
            ...action,
            payload: { ...action.payload, author: "" },
          });
        case SEND_FEEDBACK:
          socket.emit("feedback", action.payload);
          return next({
            ...action,
            payload: "",
          });
        case SEND_USER:
          socket.emit("connect user", action.payload);
          return next(action);
        default:
          break;
      }

      return next(action);
    };
  };
};

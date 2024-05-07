import { createStore, applyMiddleware, combineReducers } from "redux";
import { messagesReducer } from "./messagesReducer/messagesReducer";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { onlineUsersReducer } from "./onlineUsersReducer/onlineUsersReducer";

const rootReducer = combineReducers({
  messages: messagesReducer,
  users: onlineUsersReducer
})

const BASE_URL = process.env.REACT_APP_SERVER_URL;
console.log(BASE_URL);
export const store = createStore(
  rootReducer,
  applyMiddleware(socketMiddleware(BASE_URL))
);

import { useSelector } from "react-redux";

export const useMessages = () => {
    return useSelector(state => state.messages.messages)
} 

export const useOnlineUsers = () => {
  return useSelector(state => state.users.users);
};

export const useFeedback = () => {
  return useSelector(state => state.users.feedack);
};

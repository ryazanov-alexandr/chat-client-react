const defaultState = {
  users: [],
};

export const SEND_USER = "SEND_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const onlineUsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEND_USER:
      return state;
    case RECEIVE_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const sendUserAction = (payload) => ({type: SEND_USER, payload})
export const receiveUserAction = (payload) => ({type: RECEIVE_USER, payload})
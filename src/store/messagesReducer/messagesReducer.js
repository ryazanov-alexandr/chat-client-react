const defaultState = {
  messages: [],
  feedback: "",
};

export const SEND_MESSAGE = "SEND_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const SEND_FEEDBACK = "SEND_FEEDBACK";
export const RECEIVE_FEEDBACK = "RECEIVE_FEEDBACK";

export const messagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case RECEIVE_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case SEND_FEEDBACK:
      return { ...state, feedback: action.payload };
    case RECEIVE_FEEDBACK:
      return { ...state, feedback: action.payload };
    default:
      return state;
  }
};

export const sendMessageAction = (payload) => ({ type: SEND_MESSAGE, payload });
export const receiveMessageAction = (payload) => ({
  type: RECEIVE_MESSAGE,
  payload,
});
export const sendFeedbackAction = (payload) => ({
  type: SEND_FEEDBACK,
  payload,
});
export const receiveFeedbackAction = (payload) => ({
  type: RECEIVE_FEEDBACK,
  payload,
});

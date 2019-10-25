import { ADD_MESSAGES } from "../actions/messages-actions";

export default function messages(state = [], action = {}) {
  switch (action.type) {
    case ADD_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}

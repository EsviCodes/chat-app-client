export const ADD_MESSAGES = "ADD_MESSAGES";

export const addMessages = payload => (dispatch, getState) => {
  dispatch({
    type: ADD_MESSAGES,
    payload
  });
};

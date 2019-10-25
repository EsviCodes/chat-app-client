import request from "superagent";
import url from "../constants";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (email, password) => (dispatch, getState) => {
  console.log(email, password); // this works
  request
    .post(`${url}/login`)
    .send({ email, password })
    .then(response => {
      console.log("What do we get?", response);
      dispatch({ type: LOGIN_SUCCESS, payload: response.body.jwt });
    })
    .catch(console.error);
};

import { request, requestSignup } from "../util/axios";

export const registerUser = (dataToSubmit) => async (dispatch) => {
  const response = await requestSignup(
    "post",
    "https://cloudwi.herokuapp.com/member",
    dataToSubmit
  );
  return { type: "REGISTER_USER", payload: response };
};

export const loginUser = (dataToSubmit) => async (dispatch) => {
  const response = await requestSignup(
    "post",
    "https://cloudwi.herokuapp.com/member/login",
    dataToSubmit
  );
  return { type: "LOGIN_USER", payload: response };
};

export const todolist = (page, headers) => async (dispatch) => {
  const response = await request(
    "get",
    `https://cloudwi.herokuapp.com/todo?page=${page}`,
    headers
  );
  return { type: "TODOLIST", payload: response };
};

export const todolistPage = (headers) => async (dispatch) => {
  const response = await request(
    "get",
    "https://cloudwi.herokuapp.com/todo/count",
    headers
  );
  return { type: "TODOLISTPAGE", payload: response };
};

export const remove = () => ({
  type: "REMOVE",
});

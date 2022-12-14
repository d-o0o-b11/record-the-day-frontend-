import { request, requestSignup, requestDATA } from "../util/axios";

//회원가입
export const registerUser = (dataToSubmit) => async (dispatch) => {
  const response = await requestSignup(
    "post",
    "https://thuxzloyfg.us15.qoddiapp.com/member",
    dataToSubmit
  );
  return { type: "REGISTER_USER", payload: response };
};

//로그인
export const loginUser = (dataToSubmit) => async (dispatch) => {
  const response = await requestSignup(
    "post",
    "https://thuxzloyfg.us15.qoddiapp.com/member/login",
    dataToSubmit
  );
  return { type: "LOGIN_USER", payload: response };
};

//todolist
export const todolist = (page, headers) => async (dispatch) => {
  const response = await request(
    "get",
    `https://thuxzloyfg.us15.qoddiapp.com/todo?page=${page}`,
    headers
  );
  return { type: "TODOLIST", payload: response };
};

export const todoinsert = (headers, dataToSubmit) => async (dispatch) => {
  const response = await requestDATA(
    "post",
    `https://thuxzloyfg.us15.qoddiapp.com/todo`,
    headers,
    dataToSubmit
  );
  return { type: "TODOINSERT", payload: response };
};

export const todolistPage = (headers) => async (dispatch) => {
  const response = await request(
    "get",
    "https://thuxzloyfg.us15.qoddiapp.com/todo/count",
    headers
  );
  return { type: "TODOLISTPAGE", payload: response };
};

export const todocheck = (headers, dataToSubmit) => async (dispatch) => {
  const response = await requestDATA(
    "put",
    "https://thuxzloyfg.us15.qoddiapp.com/todo",
    headers,
    dataToSubmit
  );
  return { type: "TODOCHECK", payload: response };
};

export const todoremove = (headers, dataToSubmit) => async (dispatch) => {
  const response = await requestDATA(
    "delete",
    "https://thuxzloyfg.us15.qoddiapp.com/todo",
    headers,
    dataToSubmit
  );
  return { type: "TODOREMOVE", payload: response };
};

//note
export const notelist = (page, headers) => async (dispatch) => {
  const response = await request(
    "get",
    `https://thuxzloyfg.us15.qoddiapp.com/note?page=${page}`,
    headers
  );
  return { type: "NOTELIST", payload: response };
};

export const notedelete = (headers, dataToSubmit) => async (dispatch) => {
  const response = await requestDATA(
    "delete",
    "https://thuxzloyfg.us15.qoddiapp.com/note",
    headers,
    dataToSubmit
  );
  return { type: "NOTEDELETE", payload: response };
};

export const notedetail = (id, headers) => async (dispatch) => {
  const response = await request(
    "get",
    `https://thuxzloyfg.us15.qoddiapp.com/note/${id}`,
    headers
  );
  return { type: "NOTEDETAIL", payload: response };
};

export const noteinsert = (headers, dataToSubmit) => async (dispatch) => {
  const response = await requestDATA(
    "post",
    `https://thuxzloyfg.us15.qoddiapp.com/note`,
    headers,
    dataToSubmit
  );
  return { type: "NOTEINSERT", payload: response };
};

export const noteedit = (id, headers) => async (dispatch) => {
  const response = await request(
    "get",
    `https://thuxzloyfg.us15.qoddiapp.com/note/${id}`,
    headers
  );
  return { type: "NOTEEDIT", payload: response };
};

export const noteedit2 = (headers, dataToSubmit) => async (dispatch) => {
  const response = await requestDATA(
    "put",
    `https://thuxzloyfg.us15.qoddiapp.com/note`,
    headers,
    dataToSubmit
  );
  return { type: "NOTEEDIT", payload: response };
};

export const notelistPage = (headers) => async (dispatch) => {
  const response = await request(
    "get",
    "https://thuxzloyfg.us15.qoddiapp.com/note/count",
    headers
  );
  return { type: "NOTELISTPAGE", payload: response };
};

export const TimeSet = () => {
  let time = localStorage.getItem("time"); //로그인 시간
  let expires = new Date(); //현재 시간

  let timeset = time.slice(17, 25) < expires.toUTCString().slice(17, 25);

  return { type: "TIMESET", payload: timeset };
};

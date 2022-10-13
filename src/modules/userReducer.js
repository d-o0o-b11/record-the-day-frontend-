const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const TODOLIST = "TODOLIST";
const TODOLISTPAGE = "TODOLISTPAGE";
const TODOCHECK = "TODOCHECK";
const TODOINSERT = "TODOINSERT";
const TODOREMOVE = "TODOREMOVE";
const NOTELIST = "NOTELIST";
const NOTEDELETE = "NOTEDELETE";
const NOTEDETAIL = "NOTEDETAIL";
const NOTEINSERT = "NOTEINSERT";
const TimeSet = "TimeSet";

export default function (state = {}, { type, payload }) {
  switch (type) {
    case REGISTER_USER:
      return { ...state, register: payload };
    case LOGIN_USER:
      return { ...state, login: payload };
    case TODOLIST:
      return { ...state, todolist: payload };
    case TODOLISTPAGE:
      return { ...state, todolistpage: payload };
    case TODOCHECK:
      return { ...state, todocheck: payload };
    case TODOINSERT:
      return { ...state, todoinsert: payload };
    case TODOREMOVE:
      return { ...state, todoremove: payload };
    case NOTELIST:
      return { ...state, notelist: payload };
    case NOTEDELETE:
      return { ...state, notedelete: payload };
    case NOTEDETAIL:
      return { ...state, notedetail: payload };
    case NOTEINSERT:
      return { ...state, noteinsert: payload };
    case TimeSet:
      return { ...state, timeset: payload };
    default:
      return state;
  }
}

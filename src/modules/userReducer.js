const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const TODOLIST = "TODOLIST";
const TODOLISTPAGE = "TODOLISTPAGE";

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
    case "REMOVE":
      return { ...state, products: "" };
    default:
      return state;
  }
}

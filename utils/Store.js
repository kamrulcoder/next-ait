import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  userInfo: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo")) : "",
  result: Cookies.get("result") ? JSON.parse(Cookies.get("result")) : {},
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return { ...state, userInfo: null };

    case "USER_RESULT":
      return { ...state, result: action.payload };

    case "USER_RESULT_REMOVE":
      return { ...state, result: null };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

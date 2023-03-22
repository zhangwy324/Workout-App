import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
      break;
    case "LOGOUT":
      return { user: null };
      break;
    default:
      return state;
      break;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem("user")),
  });
  //   useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     if (user) {
  //       dispatch({ type: "LOGIN", payload: user });
  //     }
  //   }, []);

  console.log("AuthContext state: ", state);
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

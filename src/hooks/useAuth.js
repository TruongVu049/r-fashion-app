import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }

    // const user = localStorage.getItem('user');

    // axios
    //   .get("http://localhost:5000/api/auth/checkAuth", {
    //     headers: {
    //       "access-token": user.authToken,
    //     },
    //   })
    //   .then((res) => {
    //     addUser(JSON.parse(user));
    //   })
    //   .catch((err) => {
    //     removeUser();
    //     console.log(err);
    //   });
  }, []);

  const isLogin = () => {
    return getItem("user") ? true : false;
  };

  const login = (user) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout, isLogin };
};

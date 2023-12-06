import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  // useEffect(() => {
  //   const loggedInUser = getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     addUser(foundUser);
  //   }
  // }, []);
  useEffect(() => {
    const loggedInUser = getItem("user");
    let ignore = false;
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      axios
        .get(`${process.env.REACT_APP_API_KEY}api/account/authen`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + foundUser.toKen,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            addUser(foundUser);
          }
        })
        .catch((err) => {
          removeUser();
        });
    }
    return () => (ignore = true);
  }, []);

  const login = (user) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};

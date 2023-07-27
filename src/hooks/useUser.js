import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const [user, setUser] = useState({
    id: null,
    email: null,
    userName: null,
    authToken: null,
  });
  const { setItem } = useLocalStorage();

  const addUser = (user) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };
  const removeUser = () => {
    setUser({
      id: null,
      email: null,
      userName: null,
      authToken: null,
    });
    setItem("user", "");
  };
  return { user, addUser, removeUser };
};

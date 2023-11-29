import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const [user, setUser] = useState({
    id: null,
    email: null,
    fullName: null,
    role: null,
    toKen: null,
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
      fullName: null,
      role: null,
      toKen: null,
    });
    setItem("user", "");
  };
  return { user, addUser, removeUser };
};

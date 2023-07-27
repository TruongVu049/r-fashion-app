// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// const AuthContext = createContext({});
// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({});
//   async function checkAuth(token) {
//     axios
//       .get("http://localhost:5000/checkAuth", {
//         headers: { "access-token": token },
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   }

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log(token);
//     checkAuth(token);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

import { createContext } from "react";

export const AuthContext = createContext(null);

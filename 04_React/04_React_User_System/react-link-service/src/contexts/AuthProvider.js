import axios from "../lib/axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function getMe() {
    const res = await axios.get("/users/me");
    const nextUser = res.data;
    setUser(nextUser);
  }

  async function login({ email, password }) {
    await axios.post("/auth/login", {
      email,
      password,
    });
    await getMe();
  }

  async function logout() {
    /** @TODO 로그아웃 구현하기 */
  }

  async function updateMe(formData) {
    const res = await axios.patch("/users/me", formData);
    const nextUser = res.data;
    setUser(nextUser);
  }

  // 사이트에 처음 접속했을 때 유저 데이터 받아오기
  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

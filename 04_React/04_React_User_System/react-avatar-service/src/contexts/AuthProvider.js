import axios from "../lib/axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  avatar: null,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
  updateAvatar: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  async function getMe() {
    const res = await axios.get("/users/me");
    const user = res.data;
    setUser(user);
  }

  async function getMyAvatar() {
    const res = await axios.get("/users/me/avatar");
    const avatar = res.data;
    setAvatar(avatar);
  }

  async function login({ email, password }) {
    await axios.post("/auth/login", { email, password });
    await getMe();
    await getMyAvatar();
  }

  async function logout() {
    // ...
  }

  async function updateMe({ name, email }) {
    const res = await axios.patch("/users/me", { name, email });
    const nextUser = res.data;
    setUser(nextUser);
  }

  async function updateAvatar(values) {
    const res = await axios.patch("/users/me/avatar", values);
    const nextAvatar = res.data;
    setAvatar(nextAvatar);
  }

  // 사이트에 처음 접속했을 때 유저 데이터와 아바타 데이터 받아오기
  useEffect(() => {
    getMe();
    getMyAvatar();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        avatar,
        login,
        logout,
        updateMe,
        updateAvatar,
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

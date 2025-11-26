import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../lib/axios";

const AuthContext = createContext({
  user: null,
  isPending: true,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
});

export function AuthProvider({ children }) {
  const [values, setValues] = useState({
    user: null,
    isPending: true,
  });

  async function getMe() {
    setValues((prevValues) => ({
      ...prevValues,
      isPending: true,
    }));

    let nextUser;

    try {
      const res = await axios.get("/users/me");
      nextUser = res.data;
    } finally {
      setValues((prevValues) => ({
        ...prevValues,
        user: nextUser,
        isPending: false,
      }));
    }
  }

  async function login({ email, password }) {
    await axios.post("/auth/login", {
      email,
      password,
    });
    await getMe();
  }

  async function logout() {
    await axios.delete("/auth/logout");
    setValues((prevValues) => ({
      ...prevValues,
      user: null,
      avatar: null,
    }));
  }

  async function updateMe(formData) {
    const res = await axios.patch("/users/me", formData);
    const nextUser = res.data;
    setValues((prevValues) => ({
      ...prevValues,
      user: nextUser,
    }));
  }

  // 사이트에 처음 접속했을 때 유저 데이터 받아오기
  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: values.user,
        isPending: values.isPending,
        login,
        logout,
        updateMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(required) {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  useEffect(() => {
    if (required && !context.user && !context.isPending) {
      navigate("/login");
    }
  }, [context.user, context.isPending, navigate, required]);

  return context;
}

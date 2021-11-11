// 在真实环境中, 如果使用firebase这种第三方auth服务, 本文件不需要开发者开发

import { User } from "./screens/project-list/search-panel";

const localStrongKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStrongKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStrongKey, user.token || "");
  return user;
};

// 登陆
export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

// 注册
export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

// 退出
export const logout = async () =>
  await window.localStorage.removeItem(localStrongKey);

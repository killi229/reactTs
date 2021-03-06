import React, { FormEvent } from "react";
import { useAuth } from "../../context/auth-context";

export const LoginScreens = () => {
  const { user, login } = useAuth();

  // 点击登陆
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 取消默认提交
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登录成功{user?.name}</div> : "还没登录"}
      <div>
        <label htmlFor="username">用户名</label>
        <input id={"username"} type="text" />
      </div>

      <div>
        <label htmlFor="password">密码</label>
        <input id={"password"} type="password" />
      </div>

      <button type={"submit"}>登陆</button>
    </form>
  );
};

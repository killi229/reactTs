import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";

// 注册界面
export const RegisterScreen = () => {
  const { register } = useAuth();

  // 点击登陆
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 取消默认提交
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    register({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input id={"username"} type="text" />
      </div>

      <div>
        <label htmlFor="password">密码</label>
        <input id={"password"} type="password" />
      </div>

      <button type={"submit"}>注册</button>
    </form>
  );
};

import React, { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreens = () => {
  // 登陆login
  const Login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(param),
    }).then((res) => {
      if (res.ok) {
      }
    });
  };

  // 点击登陆
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 取消默认提交
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    Login({ username, password });
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

      <button type={"submit"}>登陆</button>
    </form>
  );
};

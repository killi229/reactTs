// 没有登陆的界面
import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false); // 当前是登陆还是注册, true注册 false登陆

  return (
    <>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "登陆界面" : "注册界面"}
      </button>
    </>
  );
};

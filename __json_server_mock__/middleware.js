// common js规范
module.exports = (req, res, next) => {
  // 登陆
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123") {
      return res.status(200).json({
        user: { token: 123, messages: "成功" },
      });
    } else {
      return res.status(400).json({ messages: "用户名或密码错误" });
    }
  }

  next();
};

const express = require("express");
const router = express.Router();
const { getUserByToken } = require("../utils/auth.utils");

module.exports = (server) => {
  router.post("/api/user/login", (req, res) => {
    const { body } = req;

    let users = server.db.getState().users,
      matchedUser = users.find((user) => {
        const ret = user.userName.toLowerCase() === body.userName.toLowerCase();
        if (ret) console.log(user);
        return ret;
      });

    if (!matchedUser) {
      res.status(401).send("Wrong username or password");
    } else if (matchedUser.password === body.password) {
      res.json({ token: matchedUser.token });
    } else {
      res.status(401).send("Wrong username or password");
    }
  });

  router.get("/api/user/profile", (req, res) => {
    const matchedUser = getUserByToken(req, res, server);

    if (!matchedUser) {
      return res.status(401).send("Unauthorized");
    }

    const { token, userName, password, ...user } = matchedUser;

    res.json(user);
  });

  return router;
};

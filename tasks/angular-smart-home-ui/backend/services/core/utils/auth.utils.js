function getUserByToken(req, res, server) {
  const authorizationHeader =
    req.header("Authorization") && req.header("Authorization").split(" ");
  const authorizationMethod = authorizationHeader && authorizationHeader[0];
  const reqToken = authorizationHeader && authorizationHeader[1];

  if (!reqToken || authorizationMethod !== "Bearer") {
    return res.status(401).send("Unauthorized");
  }

  return server.db.getState().users.find((user) => {
    const ret = user.token.toLowerCase() === reqToken.toLowerCase();
    if (ret) console.log(user);
    return ret;
  });
}

module.exports = { getUserByToken };

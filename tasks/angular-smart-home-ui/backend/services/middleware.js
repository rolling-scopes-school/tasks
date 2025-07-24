const express = require("express");
const router = express.Router();

module.exports = (files, db) => {
  for (let file of files) {
    if (file.match(/\.middleware\.js$/gi)) {
      let middleware = require(file)(db);
      router.use(middleware);
    }
  }

  return router;
};

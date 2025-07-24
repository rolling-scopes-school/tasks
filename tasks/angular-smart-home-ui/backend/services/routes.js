const express = require("express");
const router = express.Router();

module.exports = (files) => {
  for (let file of files) {
    if (file.match(/\.routes\.js$/gi)) {
      let route = require(file);
      router.use(route);
    }
  }

  return router;
};

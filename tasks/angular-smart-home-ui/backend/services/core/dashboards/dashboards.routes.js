const express = require("express");
const jsonServer = require("json-server");
const router = express.Router();

router.use(
  jsonServer.rewriter({
    "/api/dashboards": "/api/dashboards",
    "/api/dashboards/:dashboardId": "/api/dashboards/:dashboardId",
  }),
);

module.exports = router;

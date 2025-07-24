const express = require("express");
const router = express.Router();
const { getUserByToken } = require("../utils/auth.utils");

module.exports = (server) => {
  const getDbDashboards = () => server.db.getState().dashboards;

  const requireAuth = (req, res, next) => {
    const user = getUserByToken(req, res, server);
    if (!user) return res.status(401).send("Unauthorized");
    req.user = user;
    next();
  };

  router.get("/api/dashboards", requireAuth, (req, res) => {
    const dashboards = getDbDashboards().map(({ id, title, icon }) => ({
      id,
      title,
      icon,
    }));
    res.json(dashboards);
  });

  router.get("/api/dashboards/:dashboardId", requireAuth, (req, res) => {
    const { dashboardId } = req.params;
    const dashboard = getDbDashboards().find((d) => d.id === dashboardId);

    if (!dashboard) {
      return res.status(404).send("Dashboard not found");
    }

    res.json({ tabs: dashboard.tabs || [] });
  });

  return router;
};

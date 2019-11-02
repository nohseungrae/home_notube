import urlRoutes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Notube";
  res.locals.routes = urlRoutes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

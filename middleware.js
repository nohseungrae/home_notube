import urlRoutes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Notube";
  res.locals.routes = urlRoutes;
  res.locals.loggedUser = req.user || null;
  console.log(req.user, "hello");
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(urlRoutes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(urlRoutes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");

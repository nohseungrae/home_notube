import urlRoutes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" })

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Notube";
  res.locals.routes = urlRoutes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile")
import express from "express";
import urlRoutes from "../routes";
import {
  videoDetail,
  editVideo,
  deleteVideo,
  postUpload,
  getUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(urlRoutes.upload, getUpload);
videoRouter.post(urlRoutes.upload, postUpload);

videoRouter.get(urlRoutes.videoDetail(), videoDetail);
videoRouter.get(urlRoutes.editVideo, editVideo);
videoRouter.get(urlRoutes.deleteVideo, deleteVideo);

export default videoRouter;

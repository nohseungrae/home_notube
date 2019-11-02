import express from "express";
import urlRoutes from "../routes";
import {
  videoDetail,
  deleteVideo,
  postUpload,
  getUpload,
  postEditVideo,
  getEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(urlRoutes.upload, getUpload);
videoRouter.post(urlRoutes.upload, uploadVideo, postUpload);

videoRouter.get(urlRoutes.videoDetail(), videoDetail);

videoRouter.get(urlRoutes.editVideo(), getEditVideo);
videoRouter.post(urlRoutes.editVideo(), postEditVideo);
videoRouter.get(urlRoutes.deleteVideo, deleteVideo);

export default videoRouter;

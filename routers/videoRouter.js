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
import { uploadVideo, onlyPrivate } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(urlRoutes.upload, onlyPrivate, getUpload);
videoRouter.post(urlRoutes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(urlRoutes.videoDetail(), videoDetail);

videoRouter.get(urlRoutes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(urlRoutes.editVideo(), onlyPrivate, postEditVideo);
videoRouter.get(urlRoutes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;

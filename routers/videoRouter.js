import express from "express";
import urlRoutes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(urlRoutes.videos, videos);
videoRouter.get(urlRoutes.upload, upload);
videoRouter.get(urlRoutes.videoDetail, videoDetail);
videoRouter.get(urlRoutes.editVideo, editVideo);
videoRouter.get(urlRoutes.deleteVideo, deleteVideo);

export default videoRouter;
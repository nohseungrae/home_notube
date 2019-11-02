import urlRoutes from "../routes";
import Video from "../models/Video";
export const home = async (req, res) => {
  try {
    const videos = await Video.find({})
    console.log(`${videos}내 이름은 DB 비디오`);
    res.render("home", { pageTitle: "home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home", videos: [] });
  }
};
export const search = (req, res) => {
  console.log(req.query);
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title: title,
    description: description
  })
  console.log(newVideo)
  res.redirect(urlRoutes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "videoDetail", video });
  } catch (error) {
    res.redirect(urlRoutes.home);
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(urlRoutes.home);
  }
}
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body : {title, description}
  } = req;
  try {
    await Video.findOneAndUpdate({_id : id}, {title, description})
    res.redirect(urlRoutes.videoDetail(id));
  } catch (error) {
    res.redirect(urlRoutes.home);
  }
};
export const deleteVideo = (req, res) => {
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
};

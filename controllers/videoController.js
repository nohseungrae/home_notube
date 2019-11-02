import urlRoutes from "../routes";
export const home = (req, res) => {
  console.log(`${videos}내 이름은 DB 비디오`);
  res.render("home", { pageTitle: "home", videos });
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
export const postUpload = (req, res) => {
  const {
    body: { title, file, description }
  } = req;
  res.redirect(urlRoutes.videoDetail(1234));
};

export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "videoDetail", videos });
};
export const editVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "editVideo" });
};
export const deleteVideo = (req, res) => {
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
};

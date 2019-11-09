import urlRoutes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "join" });
};
export const postJoin = async (req, res, next) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  } else {
    try {
      const user = await User({ name, email });
      await User.register(user, password);
      console.log("im userController post join");
      res.status(200);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(urlRoutes.home);
    }
  }
};
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "login" });
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: urlRoutes.login,
  successRedirect: urlRoutes.home
});

export const githubLogin = passport.authenticate("github");
export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
};
export const postGithubLogin = (req, res) => {
  res.redirect(urlRoutes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(urlRoutes.home);
};
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");

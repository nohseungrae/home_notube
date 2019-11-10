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
      console.log(error, "에러입니다.");
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
//GITHUB
export const githubLogin = passport.authenticate("github");
export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  //console.log(accessToken, refreshToken, profile, cb);
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};
export const postGithubLogin = (req, res) => {
  res.redirect(urlRoutes.home);
};
//FACEBOOK
export const facebookLogin = passport.authenticate("facebook");
export const facebookLoginCallback = (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);
};
export const postFacebookLogin = (req, res) => {
  res.redirect(urlRoutes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(urlRoutes.home);
};

export const getMe = (req, res) => {
  res.render("userDetail", { pageTitle: "Detail", user: req.user });
};

export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    console.log(user, "나는 user");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(urlRoutes.home);
  }
};
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");

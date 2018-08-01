const google = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CALLBACK_URL
} = require("../../constants");
const { Users } = require("../../firebase/users");

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
      const { id, displayName, photos } = profile;

      Users.getUser(id).then(data => {
        if (!!data) {
          done(null, user)
        } else {
          Users.createUser(id, displayName, photos[0].value);
        }
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

google.get(
  "/",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

google.get("/callback", passport.authenticate("google"), function(req, res) {
  console.log("callback");
});

exports.google = google;

const google = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CALLBACK_URL,
  REDIRECT_URL
} = require("../../constants");
const { Users } = require("../../firebase/users");
const url = require("url");

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
      const { id, displayName, photos } = profile;
      
      Users.getUser(id).then(user => {
        if (user) {
          user.id = id;

          if (!user.accessToken) {
            const updates = {};
            updates[`/users/${id}/accessToken`] = accessToken;

            Users.updateUser(updates).then(user => done(null, user));
          } else {
            done(null, user);
          }
        } else {
          Users.createUser(id, displayName, photos[0].value).then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Users.getUser(id).then(user => {
    done(null, user);
  });
});

google.get(
  "/",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

google.get("/callback", passport.authenticate("google"), function(req, res) {
  return res.json({ user: req.user });
});

exports.google = google;

const { client } = require("./client");
const { CLIENT_SIGN_IN_ID } = require("./constants");

exports.checkToken = (req, res, next) => {
  const headers = req.headers;
  const authorization = headers.authorization;

  if (authorization && authorization.split(" ")[0] === "Bearer") {
    const authorizations = authorization.split(" ")[1];

    client
      .verifyIdToken({
        idToken: authorizations[1],
        audience: CLIENT_SIGN_IN_ID
      })
      .then(data => {
        req.userData = data;
        next();
      })
      .catch(error =>
        res.json({
          access_to_url: "https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif"
        })
      );
  } else {
    res.json({
      access_to_url: "https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif"
    });
  }
};

"use strict";

const db_access = require("./model/db_access");

/**
 * Simple Express web service that has auth built using JWT.
 * This was written in a way that the developer could see what is going on behind the scenes for Authentication & middleware.
 * If you want to use a prewritten/magical way, check out these projects:
 * * https://github.com/auth0/express-jwt
 * * https://github.com/mikenicholson/passport-jwt
 */

const EXPRESS = require("express");
const app = EXPRESS();
const morgan = require("morgan");
const auth = require("./auth/auth");

//pulling in the package.json
const packageDotJson = require("./package.json");

//app listens on port 5000.  3000 is normally used by the UI dev server
const PORT = 5000;

//logger that shows requests and responses coming through the server.
app.use(morgan("dev"));

/**
 * function that can be ran before specified endpoints.  This can also be used for ALL.  to do so:   app.use(authMiddleware());
 * @param {*} req
 * @param {*} res
 * @param {*} next - callback to run to continue to api endpoint.  your request will get stuck without it!!! next()
 */
const authMiddleware = async (req, res, next) => {
  //retrieving the Authorization header from the HTTP request
  //using oath, so it needs to look like:    Authorization: bearer < your jwt>
  const authHeader = req.headers.authorization;

  //if the auth header wasn't included in teh request;
  if (!authHeader) {
    res.status(401).json({ error: "No credentials sent!" });
  } else {
    const authResult = await auth(authHeader);
    if (authResult == "forbidden") {
      res.status(401).json({ error: "Invalid credentials sent!" });
    } else {
      //you're good! carry on :D
      next();
    }
  }
};

// start listening on the port
app.listen(PORT, () =>
  console.log("welcome to senior capstone app on port: " + PORT)
);

/**
 * Health Check uri
 * localhost:5000/health
 * res status code: 200 (default if not specified)
 */
app.get("/api/health", (req, res) => {
  //retrieving service values from package.json
  const healthJson = {
    name: packageDotJson.name,
    version: packageDotJson.version
  };

  res.json(healthJson);
});

/**
 * Endpoint that verifies auth.  just making sure that auth is working
 * Future endpoints that require auth would look like this - authMiddleware goes between endpoint uri & callback function
 */
app.get("/api/testauth", authMiddleware, (req, res) => {
  res.json({ message: "auth succeeded" });
});

/**
 * Endpoint that verifies db connection.
 */
app.get("/api/dbAll", authMiddleware, (req, res) => {
  res.json({ results: db_access.getAll() });
});

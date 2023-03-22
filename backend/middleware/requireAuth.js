const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  // authorization = "Bearer asddfgdfds.sdfgsdfg.dfgsdgsdfg"
  // use split to get the string after the space
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    // attach `user` property to the req
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ error: "TokenExpiredError" });
      return;
    }
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;

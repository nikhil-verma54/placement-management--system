const adminMiddleWare = async (req, res, next) => {
  try {
    // console.log(req.user);
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res.status(403).json({ message: "Access denied" });
    }
    await next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = adminMiddleWare;

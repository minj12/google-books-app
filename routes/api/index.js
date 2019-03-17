const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = ("./")
// Book routes
router.use("/books", bookRoutes);

module.exports = router;

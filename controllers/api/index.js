const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users", userRoutes);

const blogRoutes = require("./blogRoutes");
router.use("/blogs", blogRoutes);

const commentRoutes = require("./commentRoutes");
router.use("/comments", commentRoutes);

module.exports = router;
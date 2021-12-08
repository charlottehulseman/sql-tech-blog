const express = require('express');
const router = express.Router();
const { User, Blog, Comment } = require('../models');

router.get("/", (req, res) => {
    Blog.findAll({
        include: [User]
    }).then(blogData => {
        const hbsBlogs = blogData.map(blog => blog.get({ plain: true }))
        if (req.session.user) {
            res.render("home", {
                blogs: hbsBlogs,
                username: req.session.user.username
            })
        } else {
            res.render("home", {
                blogs: hbsBlogs
            })
        }
    })
})


router.get("/dashboard", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login")
    }
    Blog.findAll({
        where: { UserId: req.session.user.id },
        include: [User, Comment]
    }).then(blogData => {
        const hbsBlogs = blogData.map(blog => blog.get({ plain: true }));
        res.render("dashboard", { blogs: hbsBlogs, username: req.session.user.username })
    })
})

router.get("/login", (req, res) => {
    res.render("login")
})


router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/newpost", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login")
    }
    res.render("newpost")
})

module.exports = router;
const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models")

const seed = async () => {
    const userData = await User.bulkCreate([
        {
            username: "charlotte",
            password: "password",
            email: "char@char.char"
        },
        {
            username: "taco",
            password: "password",
            email: "taco@taco.taco"
        },
        {
            username: "admin",
            password: "password",
            email: "admin@admin.admin"
        }
    ], {
        individualHooks: true
    })
    const blogData = await Blog.bulkCreate([
        {
            title: "Bootstrap or UIKit?",
            body: "Bootstap is cool, but it can get messy. I like UiKit because there are so many customization options. I think my instructor would beg to differ.",
            UserId: 1
        },
        {
            title: "Fortran: Still cool?",
            body: "People think fortran is dead. It's not. Fortran is cool and it is still used with HPC devs and banking systems. This is the way.",
            UserId: 2
        },
        {
            title: "OMG REACTJS",
            body: "ReactJS is amazing. Its really great. So much better than anything else. I can't believe I learn it at the end of the course. And that's the tea.",
            UserId: 3
        }
    ])
    const commentData = await Comment.bulkCreate([
        {
            body: "Terrible post I hate it",
            username: "admin",
            UserId: 3,
            BlogId: 1
        },
        {
            body: "Thank you for your thoughts, very wise",
            username: "charlotte",
            UserId: 1,
            BlogId: 2
        },
        {
            body: "And THAT'S the tea.",
            username: "taco",
            UserId: 2,
            BlogId: 3
        }
    ])
}

sequelize.sync({ force: true }).then(() => {
    seed();
})
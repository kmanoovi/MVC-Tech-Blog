const router = require("express").Router()
const {Post, User, Comment} = require("../models/")

router.get("/", (req, res) => {
    res.render("homepage")
})
router.get("/", async (req, res) => {
    try {
        const postData = await Post.FindAll({
            include: [User]
        });
        const posts = postData.map((post) => post.get({
            plain: true,
        })
        );
        res.render("all-posts", {posts})
    } catch (err){
        res.status(500).json(err)
    }
})


module.exports = router

// app.get('/', (req, res) => {
//     res.render('home');
// })
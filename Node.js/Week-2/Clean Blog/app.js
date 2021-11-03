const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const Post = require("./model/Post");
const postController = require("./controller/postController");
const pageController = require("./controller/pageController");

const app = express();
const PORT = 3000;

// mongodb connection
mongoose.connect("mongodb://localhost/clean-blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// template engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
// middleware
app.use(function (req, res, next) {
    console.log("Request:", req.path);
    next();
});

// show all posts on main page
app.get("/", postController.getAllPosts);
// show post detail
app.get("/posts/:id", postController.getPost);
// adding post to the site
app.post("/posts", postController.createPost);
// update detail of the post
app.put("/posts/:id", postController.updatePost);
// delete  the post
app.delete("/posts/:id", postController.deletePost);
// go to about page
app.get("/about", pageController.getAboutPage);
// go to add post page
app.get("/add_post", pageController.getAddPostPage);
// go to update detail of the post
app.get("/posts/edit/:id", pageController.getEditPage);

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});

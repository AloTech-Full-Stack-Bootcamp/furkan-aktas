const Post = require("../model/Post");

exports.getAboutPage = function (req, res) {
    res.render("about");
};
exports.getAddPostPage = function (req, res) {
    res.render("add_post");
};

exports.getEditPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render("edit", { post });
};

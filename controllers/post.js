const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (_, res) => {
    try {
        const allPost = await Post.find();
        res.status(200).json({
            message: "all post",
            allPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foundPost = await Post.findById(_id);
        res.status(200).json({
            message: "found post",
            foundPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();

        res.status(201).json({
            message: "post created",
            newPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.put("/:_id", async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(req.params, { $set: req.body });

        res.status(201).json({
            message: "post updated",
            updatedPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.delete("/:_id", async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne(req.params);

        res.status(201).json({
            message: "post deleted",
            deletedPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;
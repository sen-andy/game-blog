const router = require("express").Router();
const Post = require("../models/Post");
const sessionValidation = require("../middlewares/session");

router.get("/", async (_, res) => {
    try {
        const allPost = await Post.find().sort({ createdAt: -1 });
        res.status(200).json({
            message: "all post",
            payload: allPost
        });
    } catch (err) {
        res.status(500).json([{
            message: err.message
        }]);
    }
});

router.get("/:count", async (req, res) => {
    try {
        const { count } = req.params;
        const allPost = await Post.find().sort({ createdAt: -1 }).limit(count).exec();
        res.status(200).json({
            message: "all post",
            payload: allPost
        });
    } catch (err) {
        res.status(500).json([{
            message: err.message
        }]);
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foundPost = await Post.findById(_id);
        res.status(200).json({
            message: "found post",
            payload: foundPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.post("/", sessionValidation, async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();

        res.status(201).json({
            message: "post created",
            payload: newPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.put("/:_id", sessionValidation, async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(req.params, { $set: req.body });

        res.status(201).json({
            message: "post updated",
            payload: updatedPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.delete("/:_id", sessionValidation, async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne(req.params);

        res.status(201).json({
            message: "post deleted",
            payload: deletedPost
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;
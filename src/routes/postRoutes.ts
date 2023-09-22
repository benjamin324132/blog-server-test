import express from "express";
const router = express.Router();
import {
  getAllPosts,
  addPost,
  getPostById,
  updatePost,
  deletePost,
} from "./../controllers/postController";

router.route("/").get(getAllPosts).post(addPost);
router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

export default router;
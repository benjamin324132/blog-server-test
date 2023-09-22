import { Request, Response } from "express";
import { Post } from "./../models/post";
import { postSchema } from "./../validations";
import { ZodError } from "zod";

export const addPost = async (req: Request, res: Response) => {
  try {
    const { title, author, content } = await postSchema.parseAsync(req.body);

    const newPost = await new Post({
      title,
      author,
      content,
    });

    const createdPost = await newPost.save();

    res.status(201).json(createdPost);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json("Incomplete fields");
    }

    return res.status(500).json("Something went wrong");
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json("Post not found");
    }

    res.json(post);
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { title, author, content } = await postSchema.parseAsync(req.body);

    const post = await Post.findById(req.params.id);

    if (post) {
      post.title = title || post.title;
      post.author = author || post.author;
      post.content = content || post.content;

      const updatepost = await post.save();

      res.status(201).json(updatepost);
    } else {
      return res.status(404).json("Post not found");
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json("Incomplete fields");
    }

    return res.status(500).json("Something went wrong");
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.id);
    res.json(post);
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
};

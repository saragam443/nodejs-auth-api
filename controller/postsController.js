const { v4: uuid } = require("uuid");
const fsPromises = require("fs").promises;
const path = require("path");

const postsDB = {
  posts: require("../model/posts.json"),
  setPosts: function (data) {
    this.posts = data;
  },
};

const getAllPosts = (req, res) => {
  const allPosts = postsDB.posts;

  if (!allPosts?.length) {
    return res.status(400).json({ message: "posts not found" });
  }

  res.json({
    success: true,
    message: "Posts fetched successfully",
    data: allPosts,
  });
};

const createNewPost = async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const newPost = {
    id: uuid(),
    title,
    content,
    category,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  postsDB.setPosts([...postsDB.posts, newPost]);

  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "posts.json"),
    JSON.stringify(postsDB.posts)
  );

  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: newPost,
  });
};

const updatePost = async (req, res) => {
  const { id, title, content, category } = req.body;

  if (!id || !title || !content || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const post = postsDB.posts.find((post) => post.id === id);

  if (!post) {
    return res.status(400).json({ message: `Post ID ${id} not found` });
  }

  (post.title = title),
    (post.content = content),
    (post.category = category),
    (post.updatedAt = new Date());

  const unupdatedPosts = postsDB.posts.filter((post) => post.id !== id);

  postsDB.setPosts([...unupdatedPosts, post]);

  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "posts.json"),
    JSON.stringify(postsDB.posts)
  );

  res.json({ success: true, message: "Post updated successfully", data: post });
};

const deletePost = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "post id required" });
  }

  const post = postsDB.posts.find((post) => post.id === id);

  if (!post) {
    // return res.status(400).json({ message: `Post ID ${id} not found` });
  }

  const filteredArray = postsDB.posts.filter((post) => post.id !== id);

  postsDB.setPosts([...filteredArray]);

  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "posts.json"),
    JSON.stringify(postsDB.posts)
  );
  res.json({ success: true, message: "Post deleted successfully", data: post });
};

// const getPost = (req, res) => {
//   const Post = data.Posts.find((emp) => emp.id === parseInt(req.params.id));
//   if (!Post) {
//     return res
//       .status(400)
//       .json({ message: `Post ID ${req.params.id} not found` });
//   }
//   res.json(Post);
// };

module.exports = {
  getAllPosts,
  createNewPost,
  updatePost,
  deletePost,
  // getPost,
};

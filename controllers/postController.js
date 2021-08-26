const Post = require('../models/Post');
// Get back all the post
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

// Sumbit a post
const postPosts = (req, res) => {
  const { title, description } = req.body;

  const post = new Post({
    title: title,
    description: description,
  });

  post
    .save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({ message: err });
    });
};

// Get back specific post
const getSpecificPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

const deleteSpecificPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const removePost = await Post.remove({ _id: postId });
    res.json({ message: 'Post removed' });
  } catch (err) {
    res.json({ message: err });
  }
};

// Update a post
const updateSpecificPost = async (req, res) => {
  const { postId } = req.params;
  const { title, description } = req.body;
  try {
    const updatePost = await Post.updateOne(
      { _id: postId },
      { $set: { title: title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getPosts,
  postPosts,
  getSpecificPost,
  deleteSpecificPost,
  updateSpecificPost,
};

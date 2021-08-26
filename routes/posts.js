const { Router } = require('express');
const express = require('express');
const Post = require('../models/Post');

const routes = express.Router();
const {
  getPosts,
  postPosts,
  getSpecificPost,
  deleteSpecificPost,
  updateSpecificPost,
} = require('../controllers/postController');

routes.get('/', getPosts);
routes.post('/', postPosts);
routes.get('/:postId', getSpecificPost);
routes.delete('/:postId', deleteSpecificPost);
routes.patch('/:postId', updateSpecificPost);
module.exports = routes;

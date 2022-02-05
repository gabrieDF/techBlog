const express = require('express');
const router = express.Router();

const PostsController = require('./controllers/PostController.js')

router.get('/', (req, res) => res.render("home"))

router.get('/post', (req, res) => res.render("single-post"))

router.get('/posts', (req, res) => res.render('add-post'))

router.post('/add', PostsController.store)
module.exports = router;
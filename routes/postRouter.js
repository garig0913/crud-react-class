const express = require("express");
const router = express.Router();
const postController = require('../Controllers/postController')

router.post('/post', postController.postController)

router.post('/userPosts', postController.userPosts)

router.post('/deletePost', postController.deletePost)

router.post('/comment', postController.comment)

router.post('/thumbsDown', postController.thumbsDown)
router.post('/thumbsUp', postController.thumbsUp)

module.exports = router;

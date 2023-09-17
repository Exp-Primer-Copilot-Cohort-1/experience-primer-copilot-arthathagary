// create a server
const express = require('express');
// create a router
const router = express.Router();
// import the controller
const commentsCtrl = require('../controllers/comments');
// import the middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// routes
router.post('/new', auth, multer, commentsCtrl.createComment);
router.get('/', auth, commentsCtrl.getAllComments);
router.get('/:id', auth, commentsCtrl.getOneComment);
router.put('/:id', auth, multer, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

// export the router
module.exports = router;
const express = require('express')

const router = express.Router()

const Posts = require('./posts-model')



//Post Endpoints
router.get('/', (req, res) => {
  Posts.find()
    .then(post => {
      res.status(200).json(post)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the posts',
      });
    })
})

router.get('/:id', (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the post',
      });
    })
})

router.post('/', (req, res) => {
  Posts.insert(req.body)
    .then(post => {
      res.status(201).json(post)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding the post',
      });
    })
})

router.put('/:id', (req, res) => {
  const changes = req.body
  Posts.update(req.params.id, changes)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error updating the post',
      });
    })
})

router.delete('/:id', (req, res) => {
  Posts.remove(req.params.id)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error deleting the post',
      });
    })
})

router.get('/:id/comments', (req, res) => {
  Posts.findPostComments(req.params.id, req.body)
    .then(post => {
      res.status(200).json(post)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error finding the posts comments',
      });
    })
})



module.exports = router

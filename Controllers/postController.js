const Post = require('../Model/Post')
const Comment = require('../Model/Comment')


exports.postController = (req, res) => {

    const username = req.body.username
    const post = req.body.post
    const id = req.body.id

    const pst = new Post({
        username: username,
        post: post,
        userId: id,
        likes: 0
    })
    pst.save()
        .then(result => {
            console.log(result)
            res.json({ message: 'succesful' })
        })
        .catch(err => console.log(err))
}

exports.userPosts = (req, res) => {
    const postId = req.body.id
    Post.find({ id: postId })
        .then(posts => res.json(posts))
}

exports.deletePost = (req, res) => {
    const postId = req.body._id
    Post.findByIdAndDelete(postId)
        .then(result => {
            res.json({
                message: 'succesfully deleted'
            })
        })
        .catch(err => console.log(err))
}

exports.comment = (req, res) => {
    const postId = req.body.postId
    const userId = req.body.userId
    const username = req.body.username

    const comment = new Post({
        username: username,
        post: post,
        userId: id
    })
    pst.save()
        .then(result => {
            console.log(result)
            res.json({ message: 'succesful' })
        })
        .catch(err => console.log(err))
}

exports.thumbsDown = (req, res) => {
    const postId = req.body.id
    Post.findById(postId)
        .then(result => {
            let like = result.likes
            result.likes = like - 1
            return result.save()
        })
}

exports.thumbsUp = (req, res) => {
    const postId = req.body.id
    Post.findById(postId)
        .then(result => {
            let like = result.likes
            result.likes = like + 1
            return result.save()
        })
}
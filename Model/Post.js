const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema)



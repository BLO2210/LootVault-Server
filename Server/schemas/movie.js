const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    poster: {
        type: String,
        required: true,
    },
    is4K: {
        type: Boolean,
        default: false
    },
    isBD: {
        type: Boolean,
        default: false
    },
    isVHS: {
        type: Boolean,
        default: false
    },
    isDVD: {
        type: Boolean,
        default: false
    },
    isSteelbook: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Movie', movieSchema)
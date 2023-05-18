const mongoose = require('mongoose');

const MoviesListSchema = new mongoose.Schema({
    poster: { type: String, required: true},
    title: { type: String, required: true}
  })

  const MoviesList = mongoose.model("MoviesList", MoviesListSchema);
  module.exports = MoviesList;
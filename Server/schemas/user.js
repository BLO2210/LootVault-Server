const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Movie = require('./movie')

// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   moviesList: [{
//     type: mongoose.Schema.Types.ObjectId, ref: "MoviesList"
//   }]
// });

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  moviesList: [Movie.schema], // Use the Movie schema in the user schema
});

//trying something below
UserSchema.methods.addMovieToList = async function(movieData) {
  try {
    const movie = new Movie({
      poster: movieData.poster,
      title: movieData.title
    });
    this.moviesList.push(movie);
    await this.save();
    return movie;
  } catch (err) {
    throw new Error(err);
  }
};


// Hash the user's password before saving it to the database
// UserSchema.pre('save', async function(next) {
//   try {
//     // Generate a salt
//     const salt = await bcrypt.genSalt(10);

//     // Hash the password with the salt
//     const passwordHash = await bcrypt.hash(this.password, salt);

//     // Replace the password with the hashed password
//     this.password = passwordHash;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });
const User = mongoose.model("User", UserSchema);

module.exports = User;

// module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required:true}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = User = mongoose.model("User", UserSchema);

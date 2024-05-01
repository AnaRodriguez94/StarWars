const mongoose = require('mongoose');
const CharacterSchema = new mongoose.Schema({
  name: String,
  planet: String,
  forceUser: {type: Boolean, "default": false},
image: { type: String, default: "" }
},
{
collection: 'character',
}
);
const Character = mongoose.model('character', characterSchema);
module.exports = Character;

module.exports = mongoose.model('Character', CharacterSchema);

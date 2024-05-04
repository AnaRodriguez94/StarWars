const mongoose = require('mongoose');
const CharacterSchema = new mongoose.Schema({

  id:{ type: String, require: true },
  name:{ type: String, require: true },
  height: { type: Number, require: true },
  mass:{ type: Number, require: true },
  hair_color: { type: String, require: true },
  skin_color: { type: String, require: true },
  eye_color: { type: String, require: true },
  birth_year: { type: Number, require: true },
  gender: { type: String, require: true },
  homeworld: { type: String, require: true },
  films: { type: String, require: true },
  species: { type: String, require: true },
  vehicles: { type: String, require: true },
  starships: { type: String, require: true },
  created: { type: Number, require: true },
  edited: { type: String, require: true },
  url: { type: String, require: true },
},
{
collection: 'character',
}
);
const Character = mongoose.model('character', characterSchema);
module.exports = Character;

module.exports = mongoose.model('Character', CharacterSchema);

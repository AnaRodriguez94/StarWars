const express = require('express');
const router = express.Router();
const { search, postAboutCharacter, modifyCharacter } = require('../controllers/characters.controller');
const { isAuth } = require("../../middleware/auth");

const upload = require("../../middleware/upload.file")

router.post('/search', search);
router.post("/postAboutCharacter", postAboutCharacter);
router.put("/updateCharacter", [isAuth], modifyCharacter)

router.get('/:id', async (req, res) => {
    try {
      const character = await Character.findById(req.params.id).populate('characters');
      res.json(character);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
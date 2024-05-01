const express = require('express');
const router = express.Router();
const { search, postAboutCharacter, modifyCharacter } = require('../controllers/characters.controller');
const { isAuth } = require("../../middleware/auth");

const upload = require("../../middleware/upload.file")

router.post('/search', search);
router.post("/postAboutCharacter", postAboutCharacter);
router.put("/updateCharacter", [isAuth], modifyCharacter)


module.exports = router;
const express = require('express');
const router = express.Router();
const ControllerMusics = require('../Controllers/ControllerMusics');

// Rotas para músicas
router.get('/', ControllerMusics.getAllMusics);
router.get('/film/:film', ControllerMusics.getMusicsByFilm);
router.get('/rock', ControllerMusics.getRockMusic);
router.get('/electronic', ControllerMusics.getElectronicMusic);
router.get('/soundtrack', ControllerMusics.getSoundtrackMusic);
router.get('/classical', ControllerMusics.getClassicalMusic);
router.get('/traditional', ControllerMusics.getTraditionalMusic);
router.get('/jazz', ControllerMusics.getJazzMusic);
router.get('/indie-rock', ControllerMusics.getIndieRockMusic);
router.get('/folk', ControllerMusics.getFolkMusic);
router.get('/ambient', ControllerMusics.getAmbientMusic);
router.get('/mpb', ControllerMusics.getMPBMusic);
router.get('/samba', ControllerMusics.getSambaMusic);
router.get('/bossa-nova', ControllerMusics.getBossaNovaMusic);

module.exports = router;

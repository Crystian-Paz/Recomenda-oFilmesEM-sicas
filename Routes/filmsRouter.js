const express = require('express');
const router = express.Router();
const ControllerFilms = require('../Controllers/ControllerFilms');

// Rota para listar todos os filmes
router.get('/films', ControllerFilms.getAllFilms);

// Rota para listar filmes por gênero
router.get('/films/genre/:genre', ControllerFilms.getFilmsByGenre);

// Rota para listar um filme pelo nome
router.get('/films/name/:name', ControllerFilms.getFilmByName);

module.exports = router;
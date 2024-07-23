const fs = require('fs');
const path = require('path');

// Função para ler os dados dos filmes
const readFilmData = () => {
    const filePath = path.join(__dirname, '../Repositories/filmRepository.json'); // Atualize o caminho conforme necessário
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};

// Lista todos os filmes
exports.getAllFilms = (req, res) => {
    try {
        const films = readFilmData().films;
        res.status(200).json(films);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lista filmes por gênero
exports.getFilmsByGenre = (req, res) => {
    try {
        const genre = req.params.genre;
        const films = readFilmData().films.filter(film => 
            film.filmGenre.includes(genre) || film.musicalGenres.includes(genre)
        );
        res.status(200).json(films);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lista filmes por nome
exports.getFilmByName = (req, res) => {
    try {
        const name = req.params.name;
        const films = readFilmData().films.filter(film => film.nameFilm.toLowerCase() === name.toLowerCase());
        if (films.length > 0) {
            res.status(200).json(films[0]);
        } else {
            res.status(404).json({ message: 'Film not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

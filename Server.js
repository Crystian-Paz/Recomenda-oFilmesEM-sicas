import express from 'express';
import filmRoutes from './Routes/filmsRouter';

const app = express();
const PORT = 1337;
const musicRoutes = require('./Routes/musicRoutes');
const filmsRoutes = require('./routes/filmsRoutes');

app.use('/api', filmsRoutes);
app.use('/api/musics', musicRoutes);
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor Está Funcionando!');
});

// Rotas para filmes
app.use('/films', filmRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
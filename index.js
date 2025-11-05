import dotenv from 'dotenv';
dotenv.config({ path: '.env' });  

import mysql from 'mysql2/promise';
import express from 'express';

const app = express();
const port = process.env.PORT; 

app.use(express.json());

// MySQL Connection
mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}).then(connection => {
    console.log('Conectado à base de dados MySQL');
}).catch(err => {
    console.error('Erro ao conectar à base de dados MySQL:', err);
});

// Rotas
app.get('/status', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/api/movies', (req, res) => {
    //exemplo
});

app.post('/api/movies', (req, res) => {
    //exemplo
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(port, () => {
    console.log(`Servidor na porta ${port}`);
});

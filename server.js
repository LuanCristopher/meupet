const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados JSON e URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Variáveis para armazenar dados temporários
let users = []; // Para armazenar os usuários
let denuncias = []; // Para armazenar as denúncias

// Rota para cadastro de usuários
app.post('/api/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    users.push({ nome, email, senha });
    res.json({ message: 'Cadastro realizado com sucesso!' });
});

// Rota para login de usuários
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
    const user = users.find(u => u.email === email && u.senha === senha);
    if (user) {
        res.json({ message: 'Login bem-sucedido!', user });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas!' });
    }
});

// Rota para registrar denúncia
app.post('/api/denuncia', (req, res) => {
    const { denuncia } = req.body;
    denuncias.push(denuncia);
    // Após registrar a denúncia, redireciona para a página de consulta
    res.redirect('/consult.html');
});

// Rota para consultar denúncias
app.get('/api/consultas', (req, res) => {
    res.json({ denuncias });
});

// Rota para servir o arquivo consult.html
app.get('/consult.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'consult.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

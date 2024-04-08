const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const deputadosController = require('./controllers/deputadosController');
const despesasController = require('./controllers/despesasController');

app.get('/api/deputados', deputadosController.getAll);
app.get('/api/deputados/:id', deputadosController.getOne);
app.get('/api/despesas/:deputado_id', despesasController.getByDeputadoId);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


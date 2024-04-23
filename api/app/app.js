const express = require("express");
const mysqli = require('mysql');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


const connection = mysqli.createConnection({
    host: 'mysqldb',
    user: 'root',
    password: 'root',
    database: 'catalog'
});
connection.connect();

app.get('/products', function (req, res) {
    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
        res.send(results.map(item => ({ id: item.id, name: item.name, price: item.price })));
    });
})

app.post('/products', function (req, res) {
    const reqBody = {
        name: req.body.name,
        price: req.body.price,
    };

    // Insert the request body into the database
    const query = `INSERT INTO products (name, price) VALUES (?, ?)`;
    connection.query(query, [reqBody.name, reqBody.price]);
    res.status(201);
    res.send();
})



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


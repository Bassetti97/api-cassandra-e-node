const express = require ('express');
const bodyParser = require ('body-parser');
const cassandraClient = require ('./cassandra-config');

const { v4: uuidv4 } = require ('uuid');

const app = express();
const port = 3001;

app.use(bodyParser.json());

//rota get para obter todas as divas
app.get('/profissionais', async (req, res) => {
    try{
        const result = await cassandraClient.execute('SELECT * FROM profissionais');
            res.json(result.rows);
    }catch(error){
        res.status(500).send(error.message);
    }
});

//rota post para obter uma nova diva
app.post('/profissionais', async (req,res) => {
    const { name, birth, country, area, contribuition } = req.body;

    if(!name || !birth || !country || !area || !contribuition){
        return res.status(400).send('All fields are required: name, birth, country, area, contribuition');
    }

    const id = uuidv4();

    try{
        await cassandraClient.execute(
            'INSERT INTO profissionais (id, name, birth, country, area, contribuition) VALUES (?, ?, ?, ?, ?, ?)',
            [id, name, birth, country, area, contribuition],
            {prepare: true}
        );
        res.status(201).send('Profissional ${name} added with ID ${id}');
    }catch(error){
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log('Server running on http://localhost:${port}');
});
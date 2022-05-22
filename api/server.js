const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


let pessoas = [];
// verbos http
//READ
app.get('/', (req, res) =>{
    res.status(200).send(pessoas);
});

// CREATE
app.post('/', (req, res) =>{
     console.log(req.body);
    pessoas.push(req.body);
    console.log('teste ',req.body);
    res.status(201).send(req.body);
});

//UPDATE
app.put('/:id', (req, res) =>{
    
    let pessoaEncontrada = pessoas.filter(pes=>{return pes.id == req.params.id});
    pessoaEncontrada= req.body;
    res.status(202).send(req.body);
});

//DELETE
app.delete('/:id', (req, res) =>{
    for (let index = 0; index < pessoas.length; index++) {
        const pessoa = pessoas[index];
        if (pessoa.id == req.params.id) {
            pessoas.splice(index, 1);
        }
    }
    res.status(204).send('Registro excluido');
});



app.listen(3000, () => {
   console.log('Servidor Api Nofood inicializado na porta 3000'); 
});

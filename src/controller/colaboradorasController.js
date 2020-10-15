const colaboladoras = require( '../model/colaboradoras.json' );
const fs = require ('fs');

const getColaboradoras = (req, res) => {
    res.status(200).send(colaboladoras);
}

const getColaboradorasById = (req, res) => {
    const id = req.params.id;
    const filtrarColaboradoras = colaboladoras.filter((colaboladoras)=> colaboladoras.id);
    res.status(200).send(filtrarColaboradoras);
}

const postColaboradoras = (req, res) => {
    console.log(req.body);
    const {id, noneColaboradora, setor, ocupacao, horarioDeTrabalho} = req.body;
    colaboladoras.push({id, noneColaboradora, setor, ocupacao, horarioDeTrabalho})
    
    fs.writeFile('./src/model/colaboradoras.json', JSON.stringify(colaboladoras), 'utf-8' , function (err){
        if(err){
            return res.status(424).send({message:err});
        }
        console.log('Arquivo adicionado e atualizado!!!');
    });

    res.send(200).send(colaboladoras)
}

const deletarColaboradoras = (req, res) => {
    const id = req.params.id;
    const filtrarColaboradoras = colaboladoras.find((colaboladoras) => colaboladoras.id == id);
    const index = colaboladoras.indexOf(filtrarColaboradoras);
    colaboladoras.splice(index, 1);

    fs.writeFile('./src/model/colaboradoras.json', JSON.stringify(colaboladoras), 'utf-8', function (err){
        if (err){
            return res.status(424).send({message: err});
        }
        console.log('Arquivo Deletado e atualizado!!!');
    });
    res.status(200).send(colaboladoras);
}

module.exports = {
    getColaboradoras,
    postColaboradoras,
    deletarColaboradoras,
    getColaboradorasById
}
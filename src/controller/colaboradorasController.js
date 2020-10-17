const colaboladoras = require( '../model/colaboradoras.json' );
const fs = require ('fs');
const { resourceUsage } = require('process');


const getColaboradoras = (req, res) => {
    console.log (req.url);
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
    
    fs.writeFile('./src/model/colaboradoras.json', JSON.stringify(colaboladoras), 'utf8' , function (err){
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

    fs.writeFile('./src/model/colaboradoras.json', JSON.stringify(colaboladoras), 'utf8', function (err){
        if (err){
            return res.status(424).send({message: err});
        }
        console.log('Arquivo Deletado e atualizado!!!');
    });
    res.status(200).send(colaboladoras);
}

const putColaboradoras = (req, res) => {
    try {
        const id = req.params.id;
        const colaboradorasASerModificada = colaboladoras.find((colaboladoras) => colaboladoras.id == id);
        
        console.log(colaboradorasASerModificada);

        const colaboradorasAtualizadas = req.body;
        console.log (colaboradorasAtualizadas);

        const index = funcionarios.indexOf(colaboradorasASerModificada);
        console.log(index);

        colaboladoras.splice(index, 1, colaboradorasAtualizadas);
        console.log(colaboladoras)

        fs.writeFile('./src/model/colaboradoras.json', JSON.stringify(colaboladoras), 'utf8', function (err){
            if (err){
                return res.status(424).send({message: err});
            }
            console.log('Arquivo atualizado com sucesso!');
        }

        )}

        res.status(200).send(colaboladoras)
} catch (err) {
    return res.status(424).send ({message: err})
}


const patchColaboradoras = (req,res) => {
    const id = req.params.id;
    const atualizacao = req.body;
    console.log(colaboladoras);

    try{
        const colaboradorasASerModificada= colaboladoras.find((colaboladoras)=> colaboladoras.id == id);
        console.log(Object.keys(colaboradorasASerModificada))

        Object.keys(atualizacao).forEach ((chave)=> {
            colaboradorasASerModificada[chave] = atualizacao[chave];
        });
        fs.writeFile('./src/model/colaboradoras.json', 'utf8', function (err){
            if (err) {
                return res.status(424).send({message: err});
            }
            console.log('Arquivo atualizado')
        }
        )
        return res.status(200).send(colaboladoras);
    
    }catch (err){
        return res.status(424).send({message: err})
    }
}


module.exports = {
    getColaboradoras,
    postColaboradoras,
    deletarColaboradoras,
    getColaboradorasById,
    putColaboradoras,
    patchColaboradoras
}
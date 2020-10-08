const livros = require( '../model/livros.json' );
const colaboladoras = require( '../model/colaboradoras.json' );

const getAllLivros = (req, res) => {
    console.log(req.url);
    res.status(200).send(livros);
};

const deletarLivro = (req,res) => {
   
    res.status(200).send(livros);
};

const getAllColaboradoras = (req,res) => {
    res.status(200).send(colaboladoras);
};

const deletarColaboradoras = (req,res) => {
    res.status(200).send(colaboladoras);
};

const getLivrosGenero = (req,res) => {
    res.status(200).send(getLivrosGenero);
};

const getAgeByID = (req,res) => {
    const anoAtual = 2020;
    const id = req.params.id;
    const nome = filtered.nome;
    const anoDeNascimento = filtered.id.slice (2, -4);
    const idade = anoAtual - anoDeNascimento;
    res.status(200).send (`Colaboradora com o id ${id} se chama ${nome} e tem ${idade} anos.`)
};


module.exports = {
    getAllLivros,
    deletarLivro,
    getAllColaboradoras,
    deletarColaboradoras,
    getLivrosGenero,
    getAgeByID
};
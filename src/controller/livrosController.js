const livros = require( '../model/livros.json' );
const fs = require('fs');

const getAllLivros = (req, res) => {
    console.log(req.url);
    res.status(200).send(livros);
};

const postLivro = (req, res) => {
    console.log(req.body);
    const {id, nomeLivro, autora, numeroDePaginas, dataDePublicacao } = req.body;
    livros.push({id, nomeLivro, autora, numeroDePaginas, dataDePublicacao });

    fs.writeFile('./src/model/livros.json', JSON.stringify(livros), 'utf-8', function(err){
        if(err){
            return res.status(424).send({message: err});
        }
    });
}

const deletarLivro = (req,res) => {
   const id = req.params.id;
   const filtrarLivro = livros.find((livros) => livros.id == id);
   const index = livros.indexOf(filtrarLivro);
   livros.splice(index, 1);

   fs.writeFile('./src/model/livros.json', JSON.stringify(livros), 'utf-8', function (err){
       if (err) {
           return res.status(424).send({message: err});
       }

       console.log('Arquivo adicionado e atualizado!!!');
   });
        res.status(200).send(livros);
}

module.exports = {
    getAllLivros,
    postLivro,
    deletarLivro
};
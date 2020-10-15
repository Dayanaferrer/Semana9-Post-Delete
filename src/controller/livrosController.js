const livros = require( '../model/livros.json' );
const fs = require('fs');

const getAllLivros = (req, res) => {
    console.log(req.url);
    res.status(200).send(livros);
};
const getById =(req, res) => {
    const id = req.params.id;

    res.status(200).send(livros.find ((livros) => livros.id == id));
};

const postLivro = (req, res) => {
    console.log(req.body);
    const {id, nomeLivro, autora, numeroDePaginas, dataDePublicacao } = req.body;
    livros.push({id, nomeLivro, autora, numeroDePaginas, dataDePublicacao });

    fs.writeFile('./src/model/livros.json', JSON.stringify(livros), 'utf8', function(err){
        if(err){
            return res.status(424).send({message: err});
        }
    });
    console.log('Arquivo atualizado com sucesso!')
}

const deletarLivro = (req,res) => {
   const id = req.params.id;
   try {
    const filtrarLivro = livros.find((livros) => livros.id == id);
    const index = livros.indexOf(filtrarLivro);
    livros.splice(index, 1);

    fs.writeFile('./src/model/livros.json', JSON.stringify(livros), 'utf8', function (err){
        if (err) {
            return res.status(424).send({message: err});
   }
   console.log('Arquivo adicionado e atualizado!!!');  
   });
        res.status(200).send(livros);
} catch (err) {
    console.log('Arquivo atualizado com sucesso!');
    return res.status(424).send ({ message: "Erro ao deletar o registro de livros"})
    }
};

const deletarLivrosConcluida = (req, res) => {
    const livrosConcluidos = livros.filter(livros => livros.concluido == true);
    for (i=0; i < livrosConcluidos.length; i++){
        const index = livros.indexOf(livrosConcluidos[i]);
        livros.splice(index, 1);
    }

    fs.writeFile('./src/model/livros.json', JSON.stringify(livros), 'utf8', function (err) {
        if (err) {
            return res.status(424).send({message: err});
        }
        console.log('Arquivo atualizado!');
    });

    res.status(200).send(livros)
}

const putLivros = (req, res) => {
    try{

    const id = req.params.id;

    const livrosASerModificado = livros.find((livros) => livros.id == id);
    console.log(livrosASerModificado);

    const livrosAtualizado = req.body;
    console.log(livrosAtualizado);

    const index = livros.indexOf(livrosASerModificado);
    console.log(index);

    livros.splice(index, 1, livrosAtualizado)
    console.log(livros);

    fs.writeFile('./src/model/livros.json', JSON.stringify(livros), 'utf8', function (err){
        if (err) {
            return res.status(424).send ({message: err});
        }
        console.log('Arquivo atualizado com sucesso!');
    });

    res.status(200).send(livros)
    
    } catch (err) {
        return res.status(424).send({message: err});

    }
}

const patchLivros = (req, res) => {
    const id = req.params.id;
    const atualizacao = req.body;
    console.log(atualizacao)

    try{
        const livrosASerModificado = livros.find((livros) => livros.id == id);

        Object.keys(atualizacao).forEach((chave) => {
            livrosASerModificado [chave] = atualizacao [chave]
        });
        
        fs.writeFile('./src/model/livros.json', JSON.stringify(livros), 'utf8', function (err){
            if (err) {
                return res.status(424).send({message: err});
            }
            console.log('Arquivo atualizado com sucesso!!!')
        });

        return res.status(200).send(livros);
    } catch(err){
        return res.status(424).send({message: err});
    }
}


module.exports = {
    getAllLivros,
    getById,
    postLivro,
    deletarLivro,
    deletarLivrosConcluida,
    putLivros,
    patchLivros
};
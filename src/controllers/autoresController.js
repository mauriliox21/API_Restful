import autores from '../models/Autor.js';

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        });
    }

    static listarAutorPorId = (req, res) => {
        const {id} = req.params;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id do Autor não encontrado`})
            }else{
                res.status(200).json(autores)
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
            }
            else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const {id} = req.params;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const {id} = req.params;

        autores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Exclusão realizada com sucesso'})
            }
        })
    }
}

export default AutorController;
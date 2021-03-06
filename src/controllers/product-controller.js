const repository = require('../repositories/product-repository')

exports.get = async(req, res, next) => {
  try {
    var data = await repository.get()
    res.status(200).send(data)
    
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição: ',
      error: error
    })
  }
}

exports.getByTitle = async(req, res, next) => {
  try {
    var data = await repository.getByTitle(req.params.title)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição: ',
      error: error
    })
  }
}

exports.getById = async(req, res, next) => {
  try {
    var data = await repository.getById(req.params.id)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição: ',
      error: error
    })
  }
}

exports.post = async(req, res, next) => {
  try {
    await repository.create(req.body)
    res.status(201).send({ 
      message: 'Produto cadastrado com sucesso!'
    })
  } catch (error) {
    res.status(400).send({
      message: 'Falha ao cadastrar o produto',
      error: error
    })
  }
}

exports.put = async(req, res, next) => {
  try {
    await repository.update(req.params.id, req.body)
    res.status(201).send({
      message: 'Produto atualizado com sucesso!'
    })
  } catch (error) {
    res.status(400).send({
      message: 'Falha ao atualizar produto',
      error: error
    })
  }
}

exports.delete = async(req, res, next) => {
  try {
    await repository.delete(req.params.id)
    res.status(200).send({
      message: 'Produto removido com sucesso!'
    })
  } catch (error) {
    res.status(400).send({
      message: 'Falha ao remover produto',
      error: error
    })
  }
}
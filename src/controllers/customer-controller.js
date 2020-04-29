const repository = require('../repositories/customer-repository')

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

exports.getByName = async(req, res, next) => {
  try {
    var data = await repository.getByName(req.params.name)
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
      message: 'Cliente cadastrado com sucesso!'
    })
  } catch (error) {
    res.status(400).send({
      message: 'Falha ao cadastrar o cliente',
      error: error
    })
  }
}

exports.put = async(req, res, next) => {
  try {
    await repository.update(req.params.id, req.body)
    res.status(201).send({
      message: 'Cliente atualizado com sucesso!'
    })
  } catch (error) {
    res.status(400).send({
      message: 'Falha ao atualizar cliente',
      error: error
    })
  }
}

exports.delete = async(req, res, next) => {
  try {
    await repository.delete(req.params.id)
    res.status(200).send({
      message: 'Cliente removido com sucesso!'
    })
  } catch (error) {
    res.status(400).send({
      message: 'Falha ao remover cliente',
      error: error
    })
  }
}
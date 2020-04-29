const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')

exports.get = async() => {
  return await Customer.find({}, 'name email')
}

exports.getByTitle = async(title) => {
  return await Customer.findOne({name: name}, 'name email password')
}

exports.getById = async(id) => {
  return await Customer.findById(id)
}

exports.create = async(data) => {
  var customer = new Customer(data)
  return await customer.save()
}

exports.update = async(id, data) => {
  return await Customer
          .findByIdAndUpdate(id, {
            $set: {
              name: data.name,
              email: data.email,
              password: data.password
            }
          })
}

exports.delete = async(id) => {
  return await Customer.findByIdAndDelete(id)
}



const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = async() => {
  return await Product.find({}, 'title price')
}

exports.getByTitle = async(title) => {
  return await Product.findOne({title: title}, 'title description price active')
}

exports.getById = async(id) => {
  return await Product.findById(id)
}

exports.create = async(data) => {
  var product = new Product(data)
  return await product.save()
}

exports.update = async(id, data) => {
  return await Product
          .findByIdAndUpdate(id, {
            $set: {
              title: data.title,
              description: data.description,
              price: data.price
            }
          })
}

exports.delete = async(id) => {
  return await Product.findByIdAndDelete(id)
}



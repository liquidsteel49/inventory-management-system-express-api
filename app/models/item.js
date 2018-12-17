const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  upc: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  ads: {
    type: Number,
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { 
    type: mongoose.Schema.Types.String, 
    required: true 
  },
  description: mongoose.Schema.Types.String,
  petType: { 
    type: mongoose.Schema.Types.String, 
    enum: ['dog', 'cat'], 
    required: true 
  }, 
  price: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  image: mongoose.Schema.Types.String,
});

const accessorySchema = new mongoose.Schema({
  name: { 
    type: mongoose.Schema.Types.String, 
    required: true 
  },
  description: mongoose.Schema.Types.String,
  accessoryType: { 
    type: mongoose.Schema.Types.String, 
    enum: ['leashes', 'bowls'], 
    required: true 
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  image: mongoose.Schema.Types.String,
});

const hygieneAndVitaminsSchema = new mongoose.Schema({
  name: { 
    type: mongoose.Schema.Types.String, 
    required: true 
  },
  description: mongoose.Schema.Types.String,
  itemType: { 
    type: mongoose.Schema.Types.String, 
    enum: ['cosmetics', 'vitamins'], 
    required: true 
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  image: mongoose.Schema.Types.String,
});

const Food = mongoose.model('Food', foodSchema);  
const Accessory = mongoose.model('Accessory', accessorySchema);
const HygieneAndVitamins = mongoose.model('HygieneAndVitamins', hygieneAndVitaminsSchema);

module.exports = {Food, Accessory, HygieneAndVitamins};
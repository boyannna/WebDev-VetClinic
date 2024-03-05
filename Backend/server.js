const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Food, Accessory, HygieneAndVitamins } = require('../DB/schema'); 
const app = express();
const PORT = process.env.PORT || 2121;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Team8:1234566678@cluster0.ssiamrl.mongodb.net/vetClinic', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

app.get('/api/:category', async (req, res) => {
    const category = req.params.category;

    try {
        let products;

        if (category === 'foods') {
            products = await Food.find();
        } else if (category === 'accessories') {
            products = await Accessory.find();
        } else if (category === 'hygieneandvitamins') {
            products = await HygieneAndVitamins.find();
        } else {
            return res.status(404).json({ message: 'Not Found' });
        }

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving products' });
    }
});

app.get('/api/search/:keyword', async (req, res) => {
    try {
      const { keyword } = req.params;
      const regex = new RegExp(keyword, 'i');
      const products = await Promise.all([
        Food.find({ name: regex }),
        Accessory.find({ name: regex }),
        HygieneAndVitamins.find({ name: regex }),
      ]);
  
      const flattenedProducts = products.reduce((acc, categoryProducts) => acc.concat(categoryProducts), []);
      
      console.log(`Search results for "${keyword}":`, flattenedProducts);
      res.json(flattenedProducts);
    } catch (error) {
      console.error(`Search error:`, error);
      res.status(500).json({ message: 'Error searching for products' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

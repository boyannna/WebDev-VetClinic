const mongoose = require('mongoose');
const {addFoods, addAccessories, addHygieneAndVitamins} = require('./data');

mongoose.connect('mongodb+srv://Team8:1234566678@cluster0.ssiamrl.mongodb.net/vetClinic', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  console.log('Connected to the database');

  await addFoods();
  await addAccessories();
  await addHygieneAndVitamins();

  console.log('Data seeding complete');
  process.exit(0);
});
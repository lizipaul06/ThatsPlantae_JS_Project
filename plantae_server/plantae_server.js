const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('garden');
  const plantsCollection = db.collection('plants');
  const plantsRouter = createRouter(plantsCollection);
  app.use('/api/garden', plantsRouter);
})
.catch(console.err);

app.listen(3000, function() {
  console.log(`Listening on port ${
    this.address().port}`);
})

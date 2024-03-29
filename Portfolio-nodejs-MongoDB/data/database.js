const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;

let database = null;

async function connect() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db('portfolio');
}

function getDB() {
  if (!database) {
    throw {message: "Database connection not established!"}
  }
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDB: getDB
}
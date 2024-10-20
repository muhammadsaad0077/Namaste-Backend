const { MongoClient } = require('mongodb')

const url = "mongodb+srv://saad:saadi007@backend-learning.fbxi8.mongodb.net/?retryWrites=true&w=majority&appName=Backend-Learning"

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {

    await client.connect()
    console.log("Connected sucessfully to server");
    const db = client.db(dbName)
    const collection = db.collection('User')


    const data = {
        name: "Khan",
        City: "Haripur",
        Phone_No: '111111'
    }

    const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

    return 'done'
    
    
}



main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
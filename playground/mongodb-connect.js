//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Unable to connect to MongoDB server.");
    }

    console.log("Connected to MongoDB server.");
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        _id: ObjectID('111111111111111111111111'),
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia'
    }, (err, result) => {
        if(err) {
        return console.log('Unable to insert user', err);
        }
        console.log(result.ops);
    });

    client.close();
});

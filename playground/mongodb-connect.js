//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Unable to connect to MongoDB server.");
    }

    console.log("Connected to MongoDB server.");
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert to do', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // //Insert new doc into Users(name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age: 25,
    //     location: 'Philadelphia'
    // }, (err, result) => {
    //     if(err) {
    //     return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops);
    // });

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find({}).count().then((count) => {
        console.log(`Todos count: ${count}`);
     }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    client.close();
});

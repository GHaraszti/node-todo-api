const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

var id = "5cc35651b00583bdeae2d16b";

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    if(!ObjectID.isValid(id)){
        return console.log('Id not valid');
    }
    console.log('Todos by Id', todo);
}).catch((e) => console.log(e));

//User.insertMany([{email: "myemail@email.com"}]);

User.findById('5cc39cfc1b2b19d0c7afaebe').then((user) => {
    if(!user) {
          return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
 });
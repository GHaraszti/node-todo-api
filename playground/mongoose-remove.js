const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
   // console.log(result);
   //});
Todo.findByIdAndRemove('5cc7901ac9840a500af44639').then((todo) => {
    console.log(todo);
 });
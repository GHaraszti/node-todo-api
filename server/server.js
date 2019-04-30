//Modules
var express = require('express');
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

//Local scripts
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save');
// });

// var otherTodo = new Todo ({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });

// var user = new User ({
//     email: 'andrew@example.com'
// });

// user.save().then((doc) => {
//     console.log('User saved.', doc);
// }, (e) => {
//     console.log('Unable to save user.', e);
// });

var app = express();

module.exports = {app};

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, 
    (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    });
});

//GET /todos/12345
app.get('/todos/:id', (req, res) => {

    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
          return res.status(404).send();
    } 

    Todo.findById(id).then((todo) => {
        if(!todo) {
              return res.status(404).send();
        }

        res.send({todo});     
     }).catch((e) => {
        res.status(400).send();
     });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
          return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
          if(!todo) {
                return res.status(404).send();
}
          res.send(todo);
    }).catch((e) => {
          res.status(400).send();
    });
});

app.listen(port, () => {
     console.log(`Started on port ${port}`);
});


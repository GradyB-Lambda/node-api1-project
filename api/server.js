const express = require('express')
const User    = require('./users/model')
const server  = express()

server.use(express.json())

// GET
// Returns an array users -- /api/users 
server.get('/api/users', (req,res) => {
    User.find()
    .then( userResults => {
        console.log(userResults)
        res.status(200).json(userResults)
    })
    .catch(err => {
        res.status(404).json({message: err.message})
    })
})

//Returns the user object with the specified --  /api/users/:id 
server.get('/api/users/:id', (req,res) => {
        const id = req.params.id
        User.findById(id)
    .then(individual => {
        if(!individual){
            res.status(404).json({message: `user with id${id} not found`})
        }else {
            res.json(individual)
            }
        res.json(individual)
    })
    .catch(err => {
        res.status(500).json('not working ')
    })
})

// POST
// Creates a user using the information sent inside the `request body` --  /api/users    

server.post('/api/users', (req,res) => {
    const newUser = req.body
    User.insert(newUser)
        .then( newIndividial => {
            res.json(newIndividial)
        })
        .catch(err => {
            res.status(500).json({ message: err.message})
        })
   
})











server.use('*', (req,res) => {
    res.status(200).json({message: 'cant talk right now. doing hot server shhh right now'})
})


module.exports = server; // EXPORT YOUR SERVER instead of {}

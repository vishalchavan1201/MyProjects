const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();

const mongoose = require('mongoose')
const db = 'mongodb+srv://mongovishal:mongovishal@cluster0-wdyz6.mongodb.net/test?retryWrites=true&w=majority'

const User = require('./models/user.js')
mongoose.connect(db,function(err){
    if(err)
      console.log('Error connecting to mongoDb '+ err)
    else
      console.log('Connected to the mongoDb')
})

router.get('/', (req, res) => {
    res.send('From API route');
})

router.post('/login',(req, res)=>{
    let userData = req.body

    User.findOne({email : userData.email}, (err, user)=>{
        if(err)
         console.log(err)
        else{
            if(!user){
               res.status(401).send('Error finding an user')
            }
            else if(user.password != userData.password){
               res.status('401').send('Password does not match')
            }
            else
            {
                let payload = { subject: registeredUser._id}
                let token = jwt.sign(payload, 'secretKey')
                 res.status(200).send(token)
            }
        }
    })
})

//registration api
router.post('/register', (req, res)=>{
    let userData = req.body
    let user = new User(userData)
    //to save data into the mongo db
    //it gives an error or registered user
    user.save((error, registeredUser)=>{
        if(error){
         console.log('Error occureed : ' + err)            
        }
        else{
         let payload = { subject: registeredUser._id}
         let token = jwt.sign(payload, 'secretKey')
         res.status(200).send(token)
        }
    })
})

router.get('/events', (req, res)=>{
    let events = [
        {
          "_id": "1",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "2",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "3",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "4",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "5",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "6",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        }
      ]

      res.json(events)
})

router.get('/special', (req, res)=>{
    let events = [
        {
          "_id": "1",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "2",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "3",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "4",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "5",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "6",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        }
      ]

      res.json(events)
})

module.exports = router;
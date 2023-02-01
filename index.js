const express = require('express')
const app = express()
const images = require('./images.json')
const bodyParser = require('body-parser')


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/images', (req,res) => {
    res.status(200).json(images)
})

app.get('/images/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const image = images.find(images => images.id === id)
    res.status(200).json(image)
})

// app.post('/post', (req,res) => {

//     let arrInsert = {
//       "id": prospects.length + 1,
//       "firstName": req.body.firstName, 
//       "lastName": req.body.lastName, 
//       "mail": req.body.mail,
//       "phone": req.body.phone,
//       "budget": req.body.budget,
//       "message": req.body.message, 
//     }

//     prospects.push(arrInsert)
//     res.status(200).json(prospects)

//     let firstName = req.body.firstName
//     let lastName = req.body.lastName
//     let message = req.body.message
//     let budget = req.body.budget
//     let phone = req.body.phone
//     let mail = req.body.mail

//     sendMail(firstName, lastName, message, phone, mail, budget)
// })

app.listen(8080, () => {
    console.log("Server listening")
})

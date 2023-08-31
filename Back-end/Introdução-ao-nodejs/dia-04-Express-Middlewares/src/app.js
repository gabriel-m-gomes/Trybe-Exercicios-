const express = require('express');
const app = express()
const validateName = require('./middleware/validateName')
const validatePrice = require('./middleware/validatePrice')
const validateDescription = require('./middleware/validateDescription')
const validateCreatedAt = require('./middleware/validateCreatedAt')
const validateRating = require('./middleware/validateRating')
const validateDifficulty = require('./middleware/validateDifficulty')
const validateUser = require('./middleware/validateUser')
const generateToken = require('./utils/generateToken')

app.use(express.json())


const obj = {
  name: "Trekking",
  price: 0,
  description: {
    rating: 5,
    difficulty: "Fácil",
    createdAt: "10/08/2022"
  }
}

app.get('/', (req, res) => res.status(200).json(obj))


app.post('/activities',
        validateName, 
        validatePrice, 
        validateDescription,
        validateCreatedAt,
        validateRating,
        validateDifficulty,
        (req, res) => res.status(201).json({message: "Atividade cadastrada com sucesso!"}))

app.post('/signup', validateUser, (req, res) => {
  const token = generateToken()
  return res.status(200).json({ token })
})

module.exports = app;
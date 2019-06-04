const passport = require('passport');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const { userRouter } = require('./routes/userRouter');
const { authorized } = require('./auth/auth');


const PORT = process.env.PORT || 3000
const app = express();

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());

app.use('/auth', userRouter)
app.use('/users', userRouter)

app.get('/', async (req, res) => {
  try {
    res.send('los musics')
  } catch (e) {
    res.send(e)
  }
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


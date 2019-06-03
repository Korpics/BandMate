const express = require('express');
const userRouter = express.Router();
const { passport, jwtSign } = require('../auth/auth')


userRouter.post('/login', async (req,res, next) => {
    passport.authenticate('login', async(err, user, info) => {
    try {
      console.log('****************', err);
      if (err || !user) {
        const error = new Error('An Error Occurred')
        return next(error);
      }
      req.login(user, { session : false }, async (error) => {
        if ( error ) return next(error)
        const { email, id } = user
        const payload = { email, id }
        const token = jwtSign(payload)
        // return the user object and token
        return res.json({ user, token })
      })
    } catch(error) {
      return next(error)
    }
  })(req, res, next)
});

userRouter.post('/signup', async (req,res,next) => {
    passport.authenticate('signup', async (err, user, info) => {
        try{
            if (!user || err ) {
              let err = Error('Unable to create account');
              err.status = 400;
              return next(err);
            }
            console.log(user);
            return res.json({message: "User Successfully Created"})
        }
        catch (e) {
            return next(e);
        }
    })(req, res, next)
})

userRouter.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});


// post new user
userRouter.post('/', async (req, res) => {
  try {
    const postedUser = await User.create(req.body);
    res.send(postedUser);
  } catch (e) {
    console.log(e.message);
  }
});

//find one user
userRouter.get('/:id', async (req, res) => {
  try {
    const leUser = await User.findByPk(req.params.id);
    res.send(leUser);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing users
userRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const grabbedUser = await AUser.findByPk(id);
    if (grabbedUser) await grabbedUser.update(req.body);
    res.json({
      grabbedUser
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })
  

// delete particular user
userRouter.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await User.findByPk(req.params.id);
    await deleteIt.destroy();
    res.send(`successfully deleted selection ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { userRouter };
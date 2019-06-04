const { User, Friendship } = require('../models.js')
const users = require('../data')

const seedDb = async () => {
  try {
    const tryhard = await User.create ({
        "username": 'KD',
        "password": 'KDpassword',
        "name":'Kevin Drew',
        "instrument": 'drums',
        "age": '33',
        "genre": 'alternative',
        "borrough": 'brooklyn',
        "link": 'www.myspace.com',
        "influences": "Modest Mouse",
        "bio": "I am a sad boy and no longer want to be a sad boy oh man please match me so that we can play music together oh what fun that would be"
    })
    const tryharder = await User.create ({
        "username": 'LBJ',
        "password": 'LBJpassword',
        "name":'Lebron James',
        "instrument": 'guitar',
        "age": '29',
        "genre": 'alternative',
        "borrough": 'brooklyn',
        "link": 'www.facebook.com',
        "influences": "The Cure",
        "bio": "nice stuff there yeah"
    })

    // const creator = await User.bulkCreate(users)
  } catch (e) { 
      console.log('models issue ****' + e);
  } finally {
    await process.exit();
  }
}


seedDb();
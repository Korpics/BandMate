const { User } = require('../models.js')
const users = require('../data')

const seedDb = async () => {
  try {
    // declare a const that uses your table object from model.js to .bulkCreate()
    const creator = await User.bulkCreate(users)
  } catch (e) { 
      console.log('CHECK IT' + e);
  } finally {
    await process.exit();
  }
}

seedDb();
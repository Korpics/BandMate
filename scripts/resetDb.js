const { bandDb, User } = require('../models');


const resetDb = async () => {
  try {
    bandDb.sync({ force: true });
    User.sync({ force: true });
    console.log('noice, database synced');
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
}

resetDb();
const { bandDb } = require('../models');


const resetDb = async () => {
  try {
    await bandDb.sync({ force: true });
    console.log('noice, database synced');
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
}

resetDb();
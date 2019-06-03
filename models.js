const Sequelize = require('sequelize');

const bandDb = new Sequelize({
  database: 'bandDb',
  dialect: 'postgres'
});



const User = bandDb.define("users", {
  username:{
    type: Sequelize.STRING,
    allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    instrument: {
      type: Sequelize.STRING,
      allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: true
    },
    borrough: {
      type: Sequelize.STRING,
      allowNull: false
    },
    link: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.STRING,
        allowNull: true
    },
    influences: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }
  })


  module.exports = {
    bandDb,
    User
  }
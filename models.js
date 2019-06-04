const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')

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
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }
  })

  const Friendship = bandDb.define("friendships", {


  })
 

   User.belongsToMany(User, {
    through: "friendships", 
    as: "friends",
    foreignKey: "userId",
    otherKey: "user2Id"
   })


  User.beforeCreate(async (user,options) => {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  })







  module.exports = {
    bandDb,
    Friendship,
    User
  }
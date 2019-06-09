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
        allowNull: false
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


  User.belongsToMany(User, {
    as: 'Friends',
    foreignKey: 'FriendId',
    through: 'friends'
  })
  User.belongsToMany(User, {
    as: 'Friends2',
    foreignKey: 'FriendId2',
    through: 'friends'
  })

  const Post = bandDb.define("posts", {
    username:{
      type: Sequelize.STRING,
      allowNull: false
      },
      title:{ 
      type: Sequelize.STRING,
      allowNull: false
      },
      body:{
      type: Sequelize.STRING(5000),
      allowNull: false
      }
      })



      Post.belongsTo(User);
      User.hasMany(Post);




  User.beforeCreate(async (user,options) => {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  })







  module.exports = {
    bandDb,
    User,
    Post
  }
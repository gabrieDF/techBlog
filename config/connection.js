const Sequelize = require('sequelize');

const connection = new Sequelize({
  dialect: 'sqlite',
  storage: 'techBlog.sqlite'
});

module.exports = connection;
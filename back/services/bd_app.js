const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: "donitos",
  port: 5432,
  username:"postgres",
  dialect: 'postgres',
  password: '123'
});

const testConnection = async () =>{
  try {
    await sequelize.authenticate();
    console.log('Connection to bd has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

const db = {
  Sequelize,
  sequelize,
};

module.exports = db;
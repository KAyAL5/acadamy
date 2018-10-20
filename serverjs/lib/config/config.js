 // var  dotenv = require('dotenv')
// dotenv.config();
require('dotenv').config();

const env = process.env.NODE_ENV;

const dev = {
  app: {
    env: process.env.APP || 'development',
    port: parseInt(process.env.PORT) || '3000'
  },
  db: {
    dialect: process.env.DB_DIALECT || 'mongo',
    host: process.env.DB_HOST || 'mongodb://localhost:27017/academy',
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.DB_NAME || 'academy',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'db-password',
  },
  jwt:{
    encryption: process.env.JWT_ENCRYPTION || 'paidusers',
    expiration: process.env.JWT_EXPIRATION || '1h',
    round: parseInt(process.env.SALT_ROUNDS) || 10
  }
 };

 const uat = {
  app: {
    env: process.env.APP || 'development',
    port: parseInt(process.env.PORT) || '3000'
  },
  db: {
    dialect: process.env.DB_DIALECT || 'mongo',
    host: process.env.DB_HOST || 'mongodb://localhost:27017/academy',
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.DB_NAME || 'academy',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'db-password',
  },
  jwt:{
    encryption: process.env.JWT_ENCRYPTION || 'paidusers',
    expiration: process.env.JWT_EXPIRATION || '1h',
    round: parseInt(process.env.SALT_ROUNDS) || 10
  }
 };

 const prod = {
  app: {
    env: process.env.APP || 'development',
    port: parseInt(process.env.PORT) || '3000'
  },
  db: {
    dialect: process.env.DB_DIALECT || 'mongo',
    host: process.env.DB_HOST || 'mongodb://localhost:27017/academy',
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.DB_NAME || 'academy',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'db-password',
  },
  jwt:{
    encryption: process.env.JWT_ENCRYPTION || 'paidusers',
    expiration: process.env.JWT_EXPIRATION || '1h',
    round: parseInt(process.env.SALT_ROUNDS) || 10
  }
 };

 const config = {
  dev,
  uat,
  prod
 };
// console.log(dotenv);
module.exports = config.dev;
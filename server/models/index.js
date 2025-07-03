// Models index 
const sequelize = require('../config/db');
const User = require('./User');

const db = {};
db.Sequelize = sequelize;
db.User = User;

User.initModel(sequelize);

module.exports = db;
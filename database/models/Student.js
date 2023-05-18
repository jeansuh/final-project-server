/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://i.kym-cdn.com/photos/images/newsfeed/002/224/606/005.png"
  },
  gpa: {
    type: Sequelize.DECIMAL(3,2)
  }
});

// Export the student model
module.exports = Student;
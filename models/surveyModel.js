const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Survey = sequelize.define('Survey', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false,
    tableName: 'surveys'
  });
  module.exports = Survey;

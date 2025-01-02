import { DataTypes } from 'sequelize';
import connectDB from '../config/DB.js';
const sequelize = connectDB();

const Department = sequelize.define('Client', {
    // department_id: {
    //     type: DataTypes.ENUM('All', 'Finance', 'Developer', 'Executive','HR'),
    //     allowNull: false
    //   },
    departmentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  department_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(20),
    // type: DataTypes.ENUM('All', 'Finance', 'Developer', 'Executive','HR'), /// designation from designation table sync here
    allowNull: false,
    defaultValue: 'Active', // Default status is 'Active'
  },
}, {
  tableName: 'Department',
  timestamps: true, 
});

sequelize.sync({ alter: true })
  .then(() => console.log("Department synchronized!"))
  .catch((err) => console.error("Error synchronizing the Employee Table database:", err));

export {sequelize, Department };

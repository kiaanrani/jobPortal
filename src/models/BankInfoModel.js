const BankInfo = sequelize.define('BankInfo', {
    bankName: { type: DataTypes.STRING, allowNull: false },
    accountNumber: { type: DataTypes.STRING, allowNull: false },
    ifscCode: { type: DataTypes.STRING },
    branch: { type: DataTypes.STRING },
  });
  
  // Association
  Employee.hasOne(BankInfo, { foreignKey: 'employeeId' });
  BankInfo.belongsTo(Employee);
  
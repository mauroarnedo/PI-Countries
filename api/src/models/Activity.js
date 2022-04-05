const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      difficulty: {
        type: DataTypes.INTEGER,
      },
      duration: {
        type: DataTypes.INTEGER,
      },
      season: {
        type: DataTypes.JSON,
      },
    },
    {
      timestamps: false,
    }
  );
};

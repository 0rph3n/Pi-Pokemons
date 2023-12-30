const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      image: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },

      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      speed: {
        type: DataTypes.INTEGER,
      },

      height: {
        type: DataTypes.INTEGER,
      },

      weight: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};

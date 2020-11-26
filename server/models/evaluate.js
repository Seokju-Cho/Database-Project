/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evaluate', {
    Eid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'Uid'
      }
    },
    Pid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'parsing_data',
        key: 'Pid'
      }
    },
    Score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Pass: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'evaluate',
    timestamps: false,
    indexes: [
      {
        name: "fk_USER_has_PARSING_DATA_PARSING_DATA1_idx",
        using: "BTREE",
        fields: [
          { name: "Pid" },
        ]
      },
      {
        name: "fk_USER_has_PARSING_DATA_USER1_idx",
        using: "BTREE",
        fields: [
          { name: "Eid" },
        ]
      },
    ]
  });
};
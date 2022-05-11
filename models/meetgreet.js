'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  MeetGreet.init({
    event_id: {
      type:{
        type:DataTypes.SMALLINT,
      allowNull:false
      }},
    band_id: {
      type:DataTypes.SMALLINT,
    allowNull:false
    },
    start_time: {
      type:DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type:DataTypes.DATE,
      allowNull: false
    },
    meet_greet_id: {
      type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  
    }
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName:'meetGreet',
    timestamps:false
  });
  return MeetGreet;
};
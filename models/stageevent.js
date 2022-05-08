'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StageEvent.init({
    stage_events_id: {
      type: DataTypes.INTERGER,
        primaryKey: true,
        autoIncrement: true  
    },
    stage_id: {
      type:DataTypes.SMALLINT,
    allowNull:false
  },
    event_id: {type:DataTypes.SMALLINT,
    allowNull:false},
    start_time: {
      type:DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type:DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'StageEvent',
  });
  return StageEvent;
};
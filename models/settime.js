'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SetTime.init({
    event_id: {type:DataTypes.SMALLINT},
    stage_id: {
      type:DataTypes.SMALLINT,
    allowNull:false
    },
    band_id: {type:DataTypes.SMALLINT,
      allowNull:false    
    },
    start_time: {
      type:DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type:DataTypes.DATE,
      allowNull: true
    },
    set_time_id: {
      type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  
    }
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName:'setTime',
    timestamps:false
  });
  return SetTime;
};
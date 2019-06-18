"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _database = require('../database/database'); var _database2 = _interopRequireDefault(_database);

 class Menssagem extends _sequelize.Model {
  
  
} exports.Menssagem = Menssagem;

Menssagem.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  menssagem: {
    type: _sequelize.DataTypes.TEXT,
  },
  AssianenteIDEnvio:{
    type:_sequelize.DataTypes.INTEGER
  }
}, {
    sequelize: _database2.default,
    tableName: 'menssagens',
  });
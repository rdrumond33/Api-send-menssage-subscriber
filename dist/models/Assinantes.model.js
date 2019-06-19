"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

var _database = require('../database/database'); var _database2 = _interopRequireDefault(_database);

var _Messagemmodel = require('./Messagem.model');
var _AssinantesVipmodels = require('./Assinantes.models/AssinantesVip.models');

 class Assinantes extends _AssinantesVipmodels.AssinantesVip {
  
} exports.Assinantes = Assinantes;


Assinantes.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: new _sequelize.DataTypes.STRING(128),
    allowNull: false,
  },
  tipo: {
    type: _sequelize.DataTypes.ENUM("VIP", "PREMIUM", "FREE"),
    allowNull: false,
  },
  pontuacao: {
    type: _sequelize.DataTypes.INTEGER,
    defaultValue: 0
  },
  raking: {
    type: _sequelize.DataTypes.ENUM('Nivel-0','Nivel-1','Nivel-2','Nivel-3','Nivel-4','Nivel-5'),
    defaultValue:'Nivel-0'
  },
  data: {
    type: new _sequelize.DataTypes.DATEONLY,
    defaultValue : _sequelize.DataTypes.NOW
  }
}, {
    sequelize: _database2.default,
    tableName: 'assinantes',
  });

Assinantes.hasMany(_Messagemmodel.Menssagem)
_Messagemmodel.Menssagem.belongsTo(Assinantes);
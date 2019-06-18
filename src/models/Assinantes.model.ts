import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import sequelize from "../database/database";

import { Menssagem } from './Messagem.model';
import { AssinantesVip } from './Assinantes.models/AssinantesVip.models';
import { AssinantesFree } from './Assinantes.models/AssinantesFree.model';
import { AssinantesPremium } from './Assinantes.models/AssinantesPremium.model';

export class Assinantes extends AssinantesVip {
  public tipo!: Enumerator;
}


Assinantes.init({
  id: {
    type: DataTypes.INTEGER, // you can omit the `new` but this is discouraged
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM("VIP", "PREMIUM", "FREE"),
    allowNull: false,
  },
  pontuacao: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  raking: {
    type: DataTypes.ENUM('1','2','3','4','5'),
  },
  data: {
    type: new DataTypes.DATEONLY,
    defaultValue : DataTypes.NOW
  }
}, {
    sequelize,
    tableName: 'assinantes',
  });

Assinantes.hasMany(Menssagem)
Menssagem.belongsTo(Assinantes);
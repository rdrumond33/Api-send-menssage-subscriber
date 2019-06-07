import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import sequelize from "../database/database";

import { Menssagem } from './Messagem.model';
import { AssinanteVip } from './Assinantes.models/AssinanteVip.models';

export class Assinante extends AssinanteVip {
  public Tipo!: Enumerator;
}

Assinante.init({
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
  DataVidelidade: {
    type: new DataTypes.STRING(128),
  }
}, {
    sequelize,
    tableName: 'assinantes',
  });

Assinante.hasMany(Menssagem)
Menssagem.belongsTo(Assinante);
import { DataTypes, ENUM } from 'sequelize';

import sequelize from "../database/database";

import { Menssagem } from './Messagem.model';
import { AssinantesVip } from './Assinantes.models/AssinantesVip.models';

export class Assinantes extends AssinantesVip {
  public tipo!: Enumerator;
}


Assinantes.init({
  id: {
    type: DataTypes.INTEGER,
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
    type: DataTypes.ENUM('Nivel-0','Nivel-1','Nivel-2','Nivel-3','Nivel-4','Nivel-5'),
    defaultValue:'Nivel-0'
  },
  data: {
    type: new DataTypes.DATE,
    defaultValue : DataTypes.NOW
  }
}, {
    sequelize,
    tableName: 'assinantes',
  });

Assinantes.hasMany(Menssagem)
Menssagem.belongsTo(Assinantes);
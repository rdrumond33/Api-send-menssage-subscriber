import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import sequelize from "../database/database";

export class Menssagem extends Model {
  public id!: number;
  public Menssagem?: Text;
}

Menssagem.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  AssianenteIDEnvio:{
    type:DataTypes.INTEGER
  },
  dataEnvio:{
    type: new DataTypes.DATEONLY,
    defaultValue : DataTypes.NOW
  },
  menssagem: {
    type: DataTypes.TEXT,
  }
}, {
    sequelize,
    tableName: 'menssagens',
  });
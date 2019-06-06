import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import sequelize from "../database/database";

import {MensagemModel} from './Messagem.model';



export class AssinanteModel extends Model {
    public Id!: number;
    public nome!: string;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  AssinanteModel.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'assinantes',
  });

AssinanteModel.hasMany(MensagemModel)
MensagemModel.belongsTo(AssinanteModel);
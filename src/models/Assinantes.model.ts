import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import sequelize from "../database/database";

import {MensagemModel} from './Messagem.model';
import { AssinanteVip } from './Assinantes.models/AssinanteVip.models';



export class AssinanteModel extends AssinanteVip {  
    public Tipo!:Enumerator;

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
    },
    tipo: {
      type: DataTypes.ENUM("VIP","PREMIUM","FREE"),
      allowNull: false,
    },
    pontuacao: {
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    DataVidelidade: {
      type: new DataTypes.STRING(128),
    }
  }, {
    sequelize,
    tableName: 'assinantes',
  });

AssinanteModel.hasMany(MensagemModel)
MensagemModel.belongsTo(AssinanteModel);
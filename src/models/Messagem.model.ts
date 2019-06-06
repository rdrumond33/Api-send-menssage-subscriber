import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import sequelize  from "../database/database";


export class MensagemModel extends Model {
    public id!: number;
    public ownerId!: number;
    public menssagem?: Text;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

MensagemModel.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true,
    },
    assinanteId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'menssagens',
  });

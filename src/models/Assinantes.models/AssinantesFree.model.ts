import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

export class AssinantesFree extends Model {
    public id!: number;
    public nome!: string;
}

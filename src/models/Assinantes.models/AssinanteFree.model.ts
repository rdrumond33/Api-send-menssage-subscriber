import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

export class AssinanteFree extends Model {
    public Id!: number;
    public Nome!: string;
}
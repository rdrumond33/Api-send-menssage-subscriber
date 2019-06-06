import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { AssinanteFree } from "./AssinanteFree.model";

export class AssinantePremium extends AssinanteFree {
    public Pontos?: Number;    
}
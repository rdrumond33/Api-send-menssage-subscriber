import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { AssinantesFree } from "./AssinantesFree.model";

export class AssinantesPremium extends AssinantesFree {
    public pontuacao?: Number;    
}
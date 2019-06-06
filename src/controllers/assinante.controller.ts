import { Request,Response } from "express";

import {AssinanteModel} from '../models/Assinantes.model';

export async function getAssinantes(req:Request,res:Response): Promise<Response> {

    const data = await AssinanteModel.findAll()
    return res.json(data);
}
export async function createAssinate(req:Request,res:Response): Promise<Response> {
    const Assinate:AssinanteModel = req.body;
    const data = await AssinanteModel.create(Assinate);
    return res.json(data);
}
import { Request,Response } from "express";

import {AssinanteModel} from '../models/Assinantes.model';
import { AssinanteVip } from "../models/Assinantes.models/AssinanteVip.models";
import { AssinantePremium } from "../models/Assinantes.models/AssinantePremium.model";
import { AssinanteFree } from "../models/Assinantes.models/AssinanteFree.model";

export async function getAssinantes(req:Request,res:Response): Promise<Response> {

    const data = await AssinanteModel.findAll()
    return res.json(data);
}

export async function createAssinate(req:Request,res:Response): Promise<Response> {
    if (req.body.tipo === "VIP") {
        const AssinateVIP:AssinanteVip =req.body ;
        const data = await AssinanteModel.create(AssinateVIP);
        return res.json(data);
    
    }else if(req.body.tipo === "PREMIUM"){
        const AssinatePremium:AssinantePremium =req.body ;
        const data = await AssinanteModel.create(AssinatePremium);
        return res.json(data);
    
    }else if(req.body.tipo === "FREE"){
        const AssinateFree:AssinanteFree =req.body ;
        const data = await AssinanteModel.create(AssinateFree);
        return res.json(data);

    }else{
        return res.send("Error");
    }
}
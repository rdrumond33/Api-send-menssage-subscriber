import { Request, Response } from "express";

import { Assinantes } from '../models/Assinantes.model';
import { AssinantesVip } from "../models/Assinantes.models/AssinantesVip.models";
import { AssinantesPremium } from "../models/Assinantes.models/AssinantesPremium.model";
import { AssinantesFree } from "../models/Assinantes.models/AssinantesFree.model";

/*** Menssagens */
import { Menssagem } from '../models/Messagem.model';

export async function getAssinantes(req: Request, res: Response): Promise<Response> {

    const data:Assinantes[] = await Assinantes.findAll()

    return res.json(data);
}

export async function createAssinate(req: Request, res: Response): Promise<Response> {
    if (req.body.tipo === "VIP") {
        const AssinateVIP: AssinantesVip = req.body;
        const data = await Assinantes.create(AssinateVIP);
        return res.json(data);

    } else if (req.body.tipo === "PREMIUM") {
        const AssinatesPremium: AssinantesPremium = req.body;
        const data = await Assinantes.create(AssinatesPremium);
        return res.json(data);

    } else if (req.body.tipo === "FREE") {
        const AssinatesFree: AssinantesFree = req.body;
        const data = await Assinantes.create(AssinatesFree);
        return res.json(data);
    } else {
        return res.send("Error");
    }
}

/** funcoes relacionadas a Menssagens */

export async function getMenssagemId(req: Request, res: Response): Promise<Response> {
    const data = await Menssagem.findAll( { where: { AssinantesId: req.params.id } })
    return res.json(data);
}

export async function createMensagem(req: Request, res: Response): Promise<Response> {
    const menssagem: Menssagem = req.body;
    const data = await Menssagem.create(menssagem)
    return res.json(data);
}
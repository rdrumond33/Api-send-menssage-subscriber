import { Request, Response } from "express";

import { Assinante } from '../models/Assinantes.model';
import { AssinanteVip } from "../models/Assinantes.models/AssinanteVip.models";
import { AssinantePremium } from "../models/Assinantes.models/AssinantePremium.model";
import { AssinanteFree } from "../models/Assinantes.models/AssinanteFree.model";

/*** Menssagens */
import { Menssagem } from '../models/Messagem.model';

export async function getAssinantes(req: Request, res: Response): Promise<Response> {

    const data = await Assinante.findAll()
    return res.json(data);
}

export async function createAssinate(req: Request, res: Response): Promise<Response> {
    if (req.body.tipo === "VIP") {
        const AssinateVIP: AssinanteVip = req.body;
        const data = await Assinante.create(AssinateVIP);
        return res.json(data);

    } else if (req.body.tipo === "PREMIUM") {
        const AssinatePremium: AssinantePremium = req.body;
        const data = await Assinante.create(AssinatePremium);
        return res.json(data);

    } else if (req.body.tipo === "FREE") {
        const AssinateFree: AssinanteFree = req.body;
        const data = await Assinante.create(AssinateFree);
        return res.json(data);
    } else {
        return res.send("Error");
    }
}

/** funcoes relacionadas a Menssagens */

export async function getMenssagemId(req: Request, res: Response): Promise<Response> {
    const data = await Menssagem.findAll( { where: { AssinanteId: req.params.id } })
    return res.json(data);
}

export async function createMensagem(req: Request, res: Response): Promise<Response> {
    const menssagem: Menssagem = req.body;
    const data = await Menssagem.create(menssagem)
    return res.json(data);
}
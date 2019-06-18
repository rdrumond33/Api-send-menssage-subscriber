"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _Assinantesmodel = require('../models/Assinantes.model');




/*** Menssagens */
var _Messagemmodel = require('../models/Messagem.model');

 async function getAssinantes(req, res) {

    const data = await _Assinantesmodel.Assinantes.findAll()

    return res.json(data);
} exports.getAssinantes = getAssinantes;

 async function createAssinate(req, res) {    
    if (req.body.tipo === "VIP") {
        const AssinateVIP = req.body;
        const data = await _Assinantesmodel.Assinantes.create(AssinateVIP);
        res.status(200)
        return res.json({"status": 200})
    } else if (req.body.tipo === "PREMIUM") {
        const AssinatesPremium = req.body;
        const data = await _Assinantesmodel.Assinantes.create(AssinatesPremium);
        return res.json({"status": 200})
    } else if (req.body.tipo === "FREE") {
        const AssinatesFree = req.body;
        const data = await _Assinantesmodel.Assinantes.create(AssinatesFree);
        return res.json({"status": 200})
    } else {
        return res.json({"status": 400})
 
    }
} exports.createAssinate = createAssinate;

/** funcoes relacionadas a Menssagens */

 async function getMenssagemId(req, res) {
    const data = await _Messagemmodel.Menssagem.findAll({ where: { AssinanteId: req.params.id } })
    return res.json(data);
} exports.getMenssagemId = getMenssagemId;

 async function createMensagem(req, res) {
    const menssagem = req.body;
    const data = await _Messagemmodel.Menssagem.create(menssagem)
    return res.json(data);
} exports.createMensagem = createMensagem;
"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _assinantescontroller = require('../controllers/assinantes.controller');

const router = _express.Router.call(void 0, )

router.route("/Menssagem/:id")
    .get(_assinantescontroller.getMenssagemId)
    .post(_assinantescontroller.createMensagem);
router.route('/MenssagemRecebidas/:id').get(_assinantescontroller.getMenssagemRecebidasId);
exports. default = router;
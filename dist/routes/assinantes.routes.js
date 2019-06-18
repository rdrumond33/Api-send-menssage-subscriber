"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _assinantescontroller = require('../controllers/assinantes.controller');

const router = _express.Router.call(void 0, )

router.get("/Assinante",_assinantescontroller.getAssinantes)
router.get("/Assinante/:id",_assinantescontroller.getAssinantesId)

router.post("/Assinante",_assinantescontroller.createAssinate);

exports. default = router;
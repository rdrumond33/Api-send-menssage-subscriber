"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _assinantescontroller = require('../controllers/assinantes.controller');

const router = _express.Router.call(void 0, )

router.get("/Assinantes",_assinantescontroller.getAssinantes)
router.get("/Assinantes/:id",_assinantescontroller.getAssinanteId)

router.post("/Assinantes",_assinantescontroller.createAssinate);

exports. default = router;
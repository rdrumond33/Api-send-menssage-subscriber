"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _assinantescontroller = require('../controllers/assinantes.controller');

const router = _express.Router.call(void 0, )

router.route("/")
    .get(_assinantescontroller.getAssinantes)
    .post(_assinantescontroller.createAssinate)

exports. default = router;
import { Router } from 'express';
import {createMensagem,getMenssagemId} from '../controllers/assinante.controller';

const router = Router()

router.route("/Menssagem/:id")
    .get(getMenssagemId)
    .post(createMensagem);

export default router;
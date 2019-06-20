import { Router } from 'express';
import {createMensagem,getMenssagemId,getMenssagemRecebidasId} from '../controllers/assinantes.controller';

const router = Router()

router.route("/Menssagem/:id")
    .get(getMenssagemId)
    .post(createMensagem);
router.route('/MenssagemRecebidas/:id').get(getMenssagemRecebidasId);
export default router;
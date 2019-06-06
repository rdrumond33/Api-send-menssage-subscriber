import { Router } from 'express';
import { getAssinantes , createAssinate } from '../controllers/assinante.controller';

const router = Router()

router.route("/")
    .get(getAssinantes)
    .post(createAssinate);

export default router;
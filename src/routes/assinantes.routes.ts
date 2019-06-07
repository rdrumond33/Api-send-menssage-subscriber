import { Router } from 'express';
import { getAssinantes , createAssinate ,createMensagem} from '../controllers/assinantes.controller';

const router = Router()

router.route("/")
    .get(getAssinantes)
    .post(createAssinate)

export default router;
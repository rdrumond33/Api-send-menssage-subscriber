import { Router, Response } from 'express';
import { getAssinantes , createAssinate ,createMensagem,getAssinantesId} from '../controllers/assinantes.controller';

const router = Router()

router.get("/Assinante",getAssinantes)
router.get("/Assinante/:id",getAssinantesId)

router.post("/Assinante",createAssinate);

export default router;
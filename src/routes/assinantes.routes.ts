import { Router, Response } from 'express';
import { getAssinantes , createAssinate ,createMensagem,getAssinanteId} from '../controllers/assinantes.controller';

const router = Router()

router.get("/Assinante",getAssinantes)
router.get("/Assinante/:id",getAssinanteId)

router.post("/Assinante",createAssinate);

export default router;
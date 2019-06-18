import { Router, Response } from 'express';
import { getAssinantes , createAssinate ,createMensagem,getAssinanteId} from '../controllers/assinantes.controller';

const router = Router()

router.get("/Assinantes",getAssinantes)
router.get("/Assinantes/:id",getAssinanteId)

router.post("/Assinantes",createAssinate);

export default router;
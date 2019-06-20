import { Router, Response } from 'express';
import { getAssinantes, createAssinate, getAssinanteId, getRanking } from '../controllers/assinantes.controller';

const router = Router()

router.get("/Assinantes", getAssinantes)
router.get("/Assinantes/:id", getAssinanteId)
router.get("/AssinantesRanking",getRanking)
router.post("/Assinantes", createAssinate);

export default router;
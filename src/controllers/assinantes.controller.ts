import { Request, Response } from 'express';
import { Assinantes } from '../models/Assinantes.model';
import { AssinantesVip } from '../models/Assinantes.models/AssinantesVip.models';
import { AssinantesPremium } from '../models/Assinantes.models/AssinantesPremium.model';
import { AssinantesFree } from '../models/Assinantes.models/AssinantesFree.model';
import regras from '../settings/regras';

/*** Menssagens */
import { Menssagem } from '../models/Messagem.model';

export async function getAssinantes(
  req: Request,
  res: Response
): Promise<Response> {
  const data: Assinantes[] = await Assinantes.findAll();
  return res.json(data);
}

export async function getRanking(
  req: Request,
  res: Response
): Promise<Response> {
  const data: Assinantes[] = await Assinantes.findAll({
    order: [
      ['raking', 'DESC'],
      ['pontuacao', 'DESC']]
  });
  return res.json(data);
}

export async function getAssinanteId(
  req: Request,
  res: Response
): Promise<Response> {
  const data = await Assinantes.findAll({ where: { id: req.params.id } });
  return res.json(data);
}

export async function createAssinate(
  req: Request,
  res: Response
): Promise<Response> {
  if (req.body.tipo === 'VIP') {
    const AssinateVIP: AssinantesVip = req.body;
    const data = await Assinantes.create(AssinateVIP);
    res.status(200);
    return res.json({ status: 200 });
  } else if (req.body.tipo === 'PREMIUM') {
    const AssinatesPremium: AssinantesPremium = req.body;
    const data = await Assinantes.create(AssinatesPremium);
    return res.json({ status: 200 });
  } else if (req.body.tipo === 'FREE') {
    const AssinatesFree: AssinantesFree = req.body;
    const data = await Assinantes.create(AssinatesFree);
    return res.json({ status: 200 });
  } else {
    return res.json({ status: 400 });
  }
}

/** funcoes relacionadas a Menssagens */

export async function getMenssagemId(
  req: Request,
  res: Response
): Promise<Response> {
  const data = await Menssagem.findAll({
    where: { AssinanteId: req.params.id }
  });
  return res.json(data);
}

export async function getMenssagemRecebidasId(
  req: Request,
  res: Response
): Promise<Response> {
  const data = await Menssagem.findAll({
    where: { AssianenteIDEnvio: req.params.id }
  });
  return res.json(data);
}

export async function createMensagem(
  req: Request,
  res: Response
): Promise<Response> {

  const menssagem: Menssagem = req.body;
  const data = await Menssagem.create(menssagem);

  let ResData = await Assinantes.findAll({ where: { id: req.body.AssinanteId } })
  let ranking = "";
  switch (ResData[0].tipo + "") {
    case 'VIP':
      let pontoVip = regras.PontuacaoMenssagemVIP(ResData[0].data);
      ranking = regras.Ranking(ResData[0].pontuacao.valueOf() + pontoVip);
      console.log(ranking);

      Assinantes.update({ pontuacao: `${ResData[0].pontuacao.valueOf() + pontoVip}`, raking: ranking }, {
        where: {
          id: ResData[0].id
        }
      });

      break;
    case 'PREMIUM':
      let pontoPremium = regras.PontuacaoMenssagemPREMIUM();
      ranking = regras.Ranking(ResData[0].pontuacao.valueOf() + pontoPremium);

      Assinantes.update({ pontuacao: `${ResData[0].pontuacao.valueOf() + pontoPremium}`, raking: ranking }, {
        where: {
          id: ResData[0].id
        }
      })
      break;
    case 'FREE':
      /** nao recebe pontuação */
      break;
    default:
      break;
  }
  return res.json(data);
}

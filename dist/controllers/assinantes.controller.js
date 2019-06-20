"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});
var _Assinantesmodel = require('../models/Assinantes.model');



var _regras = require('../settings/regras'); var _regras2 = _interopRequireDefault(_regras);
/*** Menssagens */
var _Messagemmodel = require('../models/Messagem.model');

 async function getAssinantes(
  req,
  res
) {
  const data = await _Assinantesmodel.Assinantes.findAll();
  return res.json(data);
} exports.getAssinantes = getAssinantes;

 async function getRanking(
  req,
  res
) {
  const data = await _Assinantesmodel.Assinantes.findAll({
    order: [
      ['raking', 'DESC']]
  });
  return res.json(data);
} exports.getRanking = getRanking;

 async function getAssinanteId(
  req,
  res
) {
  const data = await _Assinantesmodel.Assinantes.findAll({ where: { id: req.params.id } });
  return res.json(data);
} exports.getAssinanteId = getAssinanteId;

 async function createAssinate(
  req,
  res
) {
  if (req.body.tipo === 'VIP') {
    const AssinateVIP = req.body;
    const data = await _Assinantesmodel.Assinantes.create(AssinateVIP);
    res.status(200);
    return res.json({ status: 200 });
  } else if (req.body.tipo === 'PREMIUM') {
    const AssinatesPremium = req.body;
    const data = await _Assinantesmodel.Assinantes.create(AssinatesPremium);
    return res.json({ status: 200 });
  } else if (req.body.tipo === 'FREE') {
    const AssinatesFree = req.body;
    const data = await _Assinantesmodel.Assinantes.create(AssinatesFree);
    return res.json({ status: 200 });
  } else {
    return res.json({ status: 400 });
  }
} exports.createAssinate = createAssinate;

/** funcoes relacionadas a Menssagens */
 async function paginaAssinante(req, res) {
  /*
 let fileurl=path.resolve(__dirname.replace('controllers','')+'public/assinante/assinante.html');
  res.sendFile(fileurl);*/

  return res.redirect('/' + req.params.id);
} exports.paginaAssinante = paginaAssinante;

 async function getMenssagemId(
  req,
  res
) {
  const data = await _Messagemmodel.Menssagem.findAll({
    where: { AssinanteId: req.params.id }
  });
  return res.json(data);
} exports.getMenssagemId = getMenssagemId;
 async function getMenssagemRecebidasId(
  req,
  res
) {
  const data = await _Messagemmodel.Menssagem.findAll({
    where: { AssianenteIDEnvio: req.params.id }
  });
  return res.json(data);
} exports.getMenssagemRecebidasId = getMenssagemRecebidasId;

 async function createMensagem(
  req,
  res
) {


  let ResData = await _Assinantesmodel.Assinantes.findAll({ where: { id: req.body.AssinanteId } })
  let ranking = "";
  switch (ResData[0].tipo + "") {
    case 'VIP':
      let pontoVip = _regras2.default.PontuacaoMenssagemVIP(ResData[0].data);
      ranking = _regras2.default.Ranking(ResData[0].pontuacao.valueOf() + pontoVip);
      console.log(ranking);

      _Assinantesmodel.Assinantes.update({ pontuacao: `${ResData[0].pontuacao.valueOf() + pontoVip}`, raking: ranking }, {
        where: {
          id: ResData[0].id
        }
      }).then(() => {

      });

      break;
    case 'PREMIUM':
      let pontoPremium = _regras2.default.PontuacaoMenssagemPREMIUM();
      ranking = _regras2.default.Ranking(ResData[0].pontuacao.valueOf() + pontoPremium);

      _Assinantesmodel.Assinantes.update({ pontuacao: `${ResData[0].pontuacao.valueOf() + pontoVip}`, raking: ranking }, {
        where: {
          id: ResData[0].id
        }
      }).then(() => {
      });

      break;
    case 'FREE':
      /** nao recebe pontuação */
      break;
    default:
      break;
  }

  const menssagem = req.body;
  const data = await _Messagemmodel.Menssagem.create(menssagem);

  return res.json(data);
} exports.createMensagem = createMensagem;

"use strict";Object.defineProperty(exports, "__esModule", {value: true});class Regras {
  PontuacaoMenssagemFREE() {
    /** nao tem pontos */
  }
  PontuacaoMenssagemVIP(dataCadastro) {
    var dateNow = new Date();
    var date2 = new Date("12/12/2010");
    var timeDiff = Math.abs(dataCadastro.getTime() - dateNow.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    /** a cada envio de mensagem sera multiplicado pela quantidade de dias  */
    return Math.ceil(diffDays / 10 + 5)
  }
  PontuacaoMenssagemPREMIUM() {
    return 1;
  }
  Ranking(pontuacao) {
    if (pontuacao <= 10) return "Nivel-0"
    else if (pontuacao > 10 && pontuacao <= 20) return "Nivel-1"
    else if (pontuacao > 20 && pontuacao <= 30) return "Nivel-2"
    else if (pontuacao > 30 && pontuacao <= 40) return "Nivel-3"
    else if (pontuacao > 40 && pontuacao <= 50) return "Nivel-4"
    else if (pontuacao > 50) return "Nivel-5"
  }
}

exports. default = new Regras();

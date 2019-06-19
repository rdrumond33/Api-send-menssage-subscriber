"use strict";class Regras {
  MenssagemFREE() {
    /** nao tem pontos */
  }
  MenssagemVIP(data) {
    /** a cada envio de mensagem sera multiplicado pela quantidade de dias  */
    return data.getDay() * 1.5;
  }
  MenssagemPREMIUM() {
    /** A cada menssagem enviada sera pontuado 5 pontos */
    return 5;
  }
  Ranking(qtdMensagem) {
    
    switch (qtdMensagem) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        break;
    }
  }
}

class Regras {
    FREE() {
        /** nao tem pontos */
    }
    VIP(data: Date) {
        /** a cada envio de mensagem sera multiplicado pela quantidade de dias  */
        return data.getDay() * 1.5
    }
    PREMIUM() {
        /** A cada menssagem enviada sera pontuado 5 pontos */
        return 5
    }
}
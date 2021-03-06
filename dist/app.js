"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});/**  */
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path'); var path = _interopRequireWildcard(_path);

//** middalewares */
var _morgan = require('morgan'); var _morgan2 = _interopRequireDefault(_morgan);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

/** Rotas */
var _assinantesroutes = require('./routes/assinantes.routes'); var _assinantesroutes2 = _interopRequireDefault(_assinantesroutes);
var _menssagemroutes = require('./routes/menssagem.routes'); var _menssagemroutes2 = _interopRequireDefault(_menssagemroutes);


 class App {
    

    constructor( PORT) {;this.PORT = PORT;
        this.app = _express2.default.call(void 0, );

        /**  configuracoes iniciais*/
        this.setting();
        this.middalewares();
        this.routers();
    }
    setting() {
        this.app.set('PORT', this.PORT || process.env.PORT || 3000)
    }

    middalewares() {
        // cors para liberar as rotas para requisisoes externas
        this.app.use(_cors2.default.call(void 0, ));
        // morgan ajuda nas mensagens de errors na hora de desenvolvimento 
        this.app.use(_morgan2.default.call(void 0, 'dev'));

        // abilitar aceitação de json e forms via requisição http
        this.app.use(_express2.default.urlencoded({ extended: true }));
        this.app.use(_express2.default.json());
    }
    routers() {
        // Rota Home 
        this.app.get('/', (req, res) => {

            res.sendFile(path.resolve(__dirname + "/public/index.html"))
        })
        // Rota Ranking
        this.app.get('/ranking', (req, res) => {

            res.sendFile(path.resolve(__dirname + "/public/raking/ranking.html"))
        })
        // Rota de login
        this.app.get('/login/:id', (req, res) => {

            res.sendFile(path.resolve(__dirname + "/public/assinante/assinante.html"))
        })

        /** Rotas dos controllers  */
        this.app.use(_assinantesroutes2.default);
        this.app.use(_menssagemroutes2.default);

    }
    async listen() {
        await this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor Rodando na pota : " + this.app.get("PORT"))
        })
    }
} exports.default = App;
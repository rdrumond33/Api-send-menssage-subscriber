/**  */
import express from 'express';
import * as path from "path";

//** middalewares */
import morgan from "morgan";
import cors from 'cors';

/** Rotas */
import AssinatesRoutes from './routes/assinantes.routes';
import MenssagemRoutes from './routes/menssagem.routes';


export default class App {
    private app: express.Application;

    constructor(private PORT?: Number | String) {
        this.app = express();

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
        this.app.use(cors());
        // morgan ajuda nas mensagens de errors na hora de desenvolvimento 
        this.app.use(morgan('dev'));

        // abilitar aceitação de json e forms via requisição http
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
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
        this.app.use(AssinatesRoutes);
        this.app.use(MenssagemRoutes);

    }
    async listen() {
        await this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor Rodando na pota : " + this.app.get("PORT"))
        })
    }
}
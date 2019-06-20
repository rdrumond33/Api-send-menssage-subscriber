/**  */
import express from 'express';

//** middalewares */
import morgan from "morgan";
import cors from 'cors';
/** Rotas */
import AssinatesRoutes from './routes/assinantes.routes';
import MenssagemRoutes from './routes/menssagem.routes';
import * as path from "path";

export default class App {
    private app:express.Application;
    
    constructor(private PORT?:Number|String) {
        this.app = express();
        
        /**  configuracoes iniciais*/
        this.setting();
        this.middalewares();
        this.routers();
    }
    setting(){
        this.app.set('PORT',this.PORT|| process.env.PORT||3000)
    }

    middalewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));

        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
    }
    routers(){
        this.app.get('/',(req,res)=>{
          
            res.sendFile(path.resolve(__dirname+"/public/index.html"))
        })
        this.app.get('/ranking',(req,res)=>{
          
            res.sendFile(path.resolve(__dirname+"/public/raking/ranking.html"))
        })
     
        this.app.get('/login/:id',(req,res)=>{
          
            res.sendFile(path.resolve(__dirname+"/public/assinante/assinante.html"))
        })
        
        /** Routas de controllers  */
        this.app.use(AssinatesRoutes);
        this.app.use(MenssagemRoutes);

    }
    async listen(){
        await this.app.listen(this.app.get("PORT"),()=>{
            console.log("Servidor Rodando na pota : " + this.app.get("PORT"))
        })
    }
}
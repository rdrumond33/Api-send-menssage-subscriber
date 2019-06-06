import express from 'express';

//** middalewares */
import morgan from "morgan";

/** Rotas */
import AssinatesRoutes from './routes/assinantes.routes';
export default class App {
    private app:express.Application;
    
    constructor(private PORT?:Number|String) {
        this.app = express();
        /** */
        this.setting();
        this.middalewares();
        this.routers();
    }
    setting(){
        this.app.set('PORT',this.PORT|| process.env.PORT||3000)
    }

    middalewares(){
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    routers(){
        this.app.use(AssinatesRoutes);
    }
    async listen(){
        await this.app.listen(this.app.get("PORT"),()=>{
            console.log("Servidor connet na pota : " + this.app.get("PORT"))
        })
    }
}
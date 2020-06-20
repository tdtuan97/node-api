import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./api/features/module/music/routes";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.mappingRoute();
    }

    private config(): void {
        //Receive data from body request
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private mappingRoute(): void{
        routes(this.app);
    }
}

export default new App().app;
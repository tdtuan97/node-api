import * as express from "express";
import * as bodyParser from "body-parser";
import router_v1 from "./api/routes/router_v1";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.mappingRoute();
    }

    private config(): void {
        //Receive data from body request
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json())
    }

    private mappingRoute(): void {
        this.app.use('/api/v1', router_v1)
    }
}

export default new App().app;
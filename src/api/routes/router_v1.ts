import {Router} from "express";

import musicRoute from "../features/music/musicRoutes";

let router_v1 = Router();

router_v1.use(musicRoute);

export default router_v1
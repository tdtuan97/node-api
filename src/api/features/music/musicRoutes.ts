import MusicController from "./MusicController";
import {Router} from 'express'

let musicController = new MusicController();
let musicRoute = Router();


musicRoute.get('/music',
    (req, res) => musicController.get(req, res))

export default musicRoute
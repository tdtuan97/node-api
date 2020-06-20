import MusicController from "./MusicController";
import {Router} from 'express'

let musicController = new MusicController();
let musicRoute = Router();


musicRoute.get('/music',
    (req, res) => musicController.find(req, res))

musicRoute.get('/music/:id',
    (req, res) => musicController.findOne(req, res))

musicRoute.post('/music',
    (req, res) => musicController.create(req, res))

musicRoute.put('/music/:id',
    (req, res) => musicController.update(req, res))

musicRoute.delete('/music/:id',
    (req, res) => musicController.delete(req, res))

export default musicRoute
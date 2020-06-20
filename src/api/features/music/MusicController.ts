import BaseController from "../base/BaseController";
import {MusicRepository} from "./repositories/MusicRepository";

export default class MusicController extends BaseController {
    constructor() {
        let musicRepository = new MusicRepository();
        super(musicRepository);
    }
}

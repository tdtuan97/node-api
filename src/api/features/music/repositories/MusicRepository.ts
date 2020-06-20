import {BaseRepository} from "../../base/repositories/BaseRepository";
import {Music} from "../entities/Music";

export class MusicRepository extends BaseRepository<Music> {
    constructor() {
        const music = new Music();
        super(music);
    }
}
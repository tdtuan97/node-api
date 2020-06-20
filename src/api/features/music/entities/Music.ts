import {BaseFirestore} from "../../base/entities/BaseFirestore"

const musicRef = 't_music';

export class Music extends BaseFirestore {
    private title: string;
    private artist: string;
    private url: string;

    constructor() {
        super(musicRef)
    }
}
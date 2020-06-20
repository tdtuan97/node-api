import db from '../../../../../database/firestore';

import {BaseFirestore} from "../../base/entities/BaseFirestore"

const musicRef = db.collection('databases').doc('db_music')
    .collection('t_music');

export class Music extends BaseFirestore {
    private title: string;
    private artist: string;
    private url: string;

    constructor() {
        super(musicRef)
    }
}
const db = require('../../../../../../database/firestore');

const musicRef = db.collection('databases').doc('db_music')
    .collection('t_music');

export class Music {
    private title: string;
    private artist: string;
    private url: string;

    constructor(title: string, artist: string, url: string) {
        this.title = title;
        this.artist = artist;
        this.url = url;
    }

    find() {
        musicRef.get()
            .then(snapshot => {
                let musicList = {};
                snapshot.forEach(doc => {
                    musicList[doc.id] = doc.data();
                });
                return musicList;
            })
            .catch(err => {
                return err;
            });

    }

    findOne(id) {
        musicRef.get()
            .then(snapshot => {
                let musicList = {};
                snapshot.forEach(doc => {
                    musicList[doc.id] = doc.data();
                });
                return musicList;
            })
            .catch(err => {
                return err;
            });
    }

    create(data) {
        musicRef.get()
            .then(snapshot => {
                let musicList = {};
                snapshot.forEach(doc => {
                    musicList[doc.id] = doc.data();
                });
                return musicList;
            })
            .catch(err => {
                return err;
            });
    }

    update(id, data) {
        musicRef.get()
            .then(snapshot => {
                let musicList = {};
                snapshot.forEach(doc => {
                    musicList[doc.id] = doc.data();
                });
                return musicList;
            })
            .catch(err => {
                return err;
            });
    }

    delete(id) {
        musicRef.get()
            .then(snapshot => {
                let musicList = {};
                snapshot.forEach(doc => {
                    musicList[doc.id] = doc.data();
                });
                return musicList;
            })
            .catch(err => {
                return err;
            });
    }
}
import db from '../../../../../database/firestore';

export abstract class BaseFirestore {
    public ref;

    protected constructor(ref) {
        this.ref = db.collection(ref)
    }

    find = (params: object) => {
        return this.ref.get()
            .then(snapshot => {
                let list = [];
                snapshot.forEach(doc => {
                    let item = {
                        id: doc.id,
                        ...doc.data()
                    }
                    list.push(item);
                });
                return list;
            })
            .catch(err => {
                return err;
            });
    }

    findOne(id) {
        return this.ref.doc(id).get()
            .then(doc => {
                if (!doc.exists) {
                    return null;
                } else {
                    return doc.data();
                }
            })
            .catch(err => {
                return err;
            });
    }

    create = (data) => {
        return this.ref.add(data)
            .then(ref => {
                return ref.id;
            })
            .catch(err => {
                return err;
            });
    }

    update(id, data) {
        return this.ref.doc(id).update(data)
            .then(_writeTime => {
                return true
            })
            .catch(err => {
                return err;
            });

    }

    delete(id) {
        return this.ref.doc(id).delete()
            .then(_writeTime => {
                return true
            })
            .catch(err => {
                return err;
            });
    }
}
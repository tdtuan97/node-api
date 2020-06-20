export abstract class BaseFirestore {
    public ref;

    protected constructor(ref) {
        this.ref = ref
    }

    find = (params: object) => {
        return this.ref.get()
            .then(snapshot => {
                let list = {};
                snapshot.forEach(doc => {
                    list[doc.id] = doc.data();
                });
                return list;
            })
            .catch(err => {
                return err;
            });
    }

    findOne(id) {

    }

    create(data) {

    }

    update(id, data) {

    }

    delete(id) {

    }
}
const db = require('../../../../../database/firestore');

module.exports = {
    get: (req, res) => {
        res.json({message: 'Success!'});
    },

    detail: (req, res) => {
        let sql = 'SELECT * FROM users WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },

    store: (req, res) => {
        let docRef = db.collection('users').doc('alovelace');
        let data = {
            first: 'Ada',
            last: 'Lovelace',
            born: 1815
        }
        docRef.set(data).then(function () {
            res.json(data);
        }).catch(reason => {
            res.json(reason);
        });
    },

    update: (req, res) => {
        let docRef = db.collection('users').doc('alovelace');
        let data = {
            first: 'Ada',
            last: 'Lovelace',
            born: 1900
        }
        docRef.update(data).then(function (writeTime) {
            res.json(data);
        }).catch(reason => {
            res.json(reason);
        });
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM users WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}

/*
module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM users';
        mysql.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM users WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE users SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO users SET ?'
        database.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM users WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}*/

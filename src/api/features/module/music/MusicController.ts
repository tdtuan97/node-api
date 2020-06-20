import { MusicRepository } from "./repositories/MusicRepository";
import { Music } from "./entities/Music";
const repository = new MusicRepository(Music);

module.exports = {
    get: (req, res) => {
        //let data = repository.find();
        res.json();
    },

    detail: (req, res) => {

    },

    store: (req, res) => {

    },

    update: (req, res) => {

    },
    delete: (req, res) => {

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

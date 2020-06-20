import * as express from "express";

export default function (app: express.Application) {
    let controller = require('./MusicController');

    // todoList Routes
    app.route('/music')
        .get(controller.get)
        .post(controller.store);

    app.route('/music/:id')
        .get(controller.detail)
        .put(controller.update)
        .delete(controller.delete);
};
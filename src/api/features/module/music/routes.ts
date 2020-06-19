'use strict';
export default function(app: any) {
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
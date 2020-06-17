'use strict';
module.exports = function(app) {
    let controller = require('./controller');

    // todoList Routes
    app.route('/users')
        .get(controller.get)
        .post(controller.store);

    app.route('/users/:id')
        .get(controller.detail)
        .put(controller.update)
        .delete(controller.delete);
};
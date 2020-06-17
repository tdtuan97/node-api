'use strict';
module.exports = function(app) {
    let controller = require('./controller');

    // todoList Routes
    app.route('/users')
        .get(controller.get);

    /*app.route('/products/:productId')
        .get(controller.detail)
        .put(controller.update)
        .delete(controller.delete);*/
};
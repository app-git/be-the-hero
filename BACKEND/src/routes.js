const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        status: 'servidor online'
    });

});

module.exports = routes;
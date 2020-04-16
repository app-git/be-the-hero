const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex.toString(configuration.development);

module.exports = connection;
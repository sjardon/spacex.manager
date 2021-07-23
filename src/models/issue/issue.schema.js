const Joi = require('joi');
const List = require('../list/list.model');


const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    list: Joi.object().instance(List).required(),
}).unknown(true)


module.exports = schema;
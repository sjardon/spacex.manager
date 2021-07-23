const Joi = require('joi');
const Member = require('../member/member.model');
const Label = require('../label/label.model');

const schema = Joi.object({
    title: Joi.string().required(),
    label: Joi.object().instance(Label).keys({
        name: Joi.any().equal('Maintenance','Research','Test')
    }).unknown(true).required()

}).unknown(true)


module.exports = schema;
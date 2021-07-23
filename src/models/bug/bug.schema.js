const Joi = require('joi');
const Member = require('../member/member.model');
const Label = require('../label/label.model');

const schema = Joi.object({
    title: Joi.string().pattern(new RegExp('bug-[a-zA-Z]{1,}-[0-9]{1,}')).required(),
    description: Joi.string().required(),
    member: Joi.object().instance(Member).required(),
    label: Joi.object().instance(Label).keys({
        name: Joi.any().equal('Bug')
    }).unknown(true).required()
}).unknown(true)


module.exports = schema;
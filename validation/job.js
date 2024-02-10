const Joi = require('joi');

module.exports = {
    create: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        requirements: Joi.array().items(Joi.string()).required(),
        responsibilities: Joi.array().items(Joi.string()).required(),
        location: Joi.string().required(),
        salaryRange: Joi.object().keys({
            low: Joi.number().required(),
            high: Joi.number().required(),
            currency: Joi.string().required()
        }),
        employer: Joi.string().required(),
        applications: Joi.array().items(Joi.string())
    }),
    get: Joi.object().keys({
        id: Joi.string().required()
    }),
    remove: Joi.object().keys({
        id: Joi.string().required()
    }),
    search: Joi.object().keys({
        search: Joi.string().allow('', null),
        limit: Joi.number().integer().min(1).allow('', null)
    }),
    update: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        requirements: Joi.array().items(Joi.string()).required(),
        responsibilities: Joi.array().items(Joi.string()).required(),
        location: Joi.string().required(),
        salaryRange: Joi.object().keys({
            low: Joi.number().required(),
            high: Joi.number().required(),
            currency: Joi.string().required()
        }),
        employer: Joi.string().required(),
        applications: Joi.array().items(Joi.string())
    })
};
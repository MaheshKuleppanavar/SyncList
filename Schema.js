const Joi=require('joi')

const taskSchema=Joi.object({
    task:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().allow('',null),
        status:Joi.string().required().valid('pending','completed'),
        duedate:Joi.date().required()
    }).required()
});

module.exports=taskSchema;
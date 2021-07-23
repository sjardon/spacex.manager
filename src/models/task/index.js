const Task = require('./task.model');
const taskSchema = require('./task.schema');
const { validateUtility } = require('../../utilities');

module.exports = (entity) => {
    
    validateUtility(taskSchema,entity);
    
    return new Task(entity);

}
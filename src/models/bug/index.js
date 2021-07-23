const Bug = require('./bug.model');
const bugSchema = require('./bug.schema');
const { validateUtility } = require('../../utilities');



module.exports = (entity) => {
    
    validateUtility(bugSchema,entity);
    
    return new Bug(entity);

}
const Issue = require('./issue.model');
const issueSchema = require('./issue.schema');
const { validateUtility } = require('../../utilities');

module.exports = (entity) => {
    
    validateUtility(issueSchema,entity);
    
    return new Issue(entity);

}
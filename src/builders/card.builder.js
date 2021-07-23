const { errorUtility } = require('../utilities');

const _builders = {
    bug: require('./card-builders/bug.builder'),
    issue: require('./card-builders/issue.builder'),
    task: require('./card-builders/task.builder')
}
module.exports = async (cardEntity, type) => {
    
    if(typeof _builders[type] == 'undefined'){
        errorUtility('Bad card type',400);
    }
    
    const builder = _builders[type];
    
    return await builder(cardEntity);
}

const _builders = {
    bug: require('./card-builders/bug.builder'),
    issue: require('./card-builders/issue.builder'),
    task: require('./card-builders/task.builder')
}
module.exports = async (cardEntity, type) => {

    const builder = _builders[type];
    
    return await builder(cardEntity);
}
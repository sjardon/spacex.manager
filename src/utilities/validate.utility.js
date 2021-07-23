const errorUtility = require('./error.utility');

module.exports = (schema,entity) => {
    
    const { error } = schema.validate(entity);

    if(error){
        errorUtility(error,500);
    }

    return true;
}

// const models = require('../models');

const BaseReopository = require("./base.repository");

class CardReopository extends BaseReopository{
    
    constructor(){

        // Endpoints

        super({
            get: '/cards/',
            getAll: '/boards/60f71dac106f474c7100c3f6/cards/',
            create: '/cards/',
            update: '/cards/',
            delete: '/cards/'
        });
    }
}


module.exports = CardReopository;
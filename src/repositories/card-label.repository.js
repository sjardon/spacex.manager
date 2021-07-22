
// const models = require('../models');

const BaseReopository = require("./base.repository");

class CardLabelReopository extends BaseReopository{
    
    constructor(idCard){

        // Endpoints

        super({
            create: false,
            delete: false
        });
    }

    setIdCard(idCard){
        this.endpoints = {
            create: `/cards/${idCard}/labels/`,
            delete: `/cards/${idCard}/idLabels/`
        }
    }

}


module.exports = CardLabelReopository;
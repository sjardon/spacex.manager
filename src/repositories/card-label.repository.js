
// const models = require('../models');

const BaseReopository = require("./base.repository");

class CardLabelReopository extends BaseReopository{
    
    constructor(){

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

    serialize(entity){

        // Custom models to Trello models
        
        const { id,name,color } = entity;

        const finalEntity = {};

        finalEntity['id'] = id;
        finalEntity['name'] = name;
        finalEntity['color'] = color;
        
        return finalEntity;


    }
}


module.exports = CardLabelReopository;
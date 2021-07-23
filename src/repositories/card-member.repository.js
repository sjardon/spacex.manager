
// const models = require('../models');

const BaseReopository = require("./base.repository");

class CardMemberReopository extends BaseReopository{
    
    constructor(){

        // Endpoints

        super({
            getAll: false,
            create: false,
            delete: false
        });
    }

    setIdCard(idCard){
        this.endpoints = {
            getAll: `/cards/${idCard}/members/`,
            create: `/cards/${idCard}/idMembers/`,
            delete: `/cards/${idCard}/idMembers/`
        }
    }

}


module.exports = CardMemberReopository;
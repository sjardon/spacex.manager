
// const models = require('../models');

const BaseReopository = require("./base.repository");

class BoardMemberReopository extends BaseReopository{
    
    constructor(){

        // Endpoints

        super({
            getAll: false
        });
    }

    setIdBoard(idBoard){
        this.endpoints = {
            getAll: `/boards/${idBoard}/members/`
        }
    }

}


module.exports = BoardMemberReopository;
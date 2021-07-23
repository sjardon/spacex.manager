
// const models = require('../models');

const BaseReopository = require("./base.repository");

class BoardListReopository extends BaseReopository{
    
    constructor(){

        // Endpoints

        super({
            getAll: false
        });
    }

    setIdBoard(idBoard){
        this.endpoints = {
            getAll: `/boards/${idBoard}/lists/`
        }
    }

}


module.exports = BoardListReopository;
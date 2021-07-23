
const { validateUtility } = require("../../utilities/");

class Member{
    constructor(entity){

        const { id, name } = entity;

        this.id = id;
        this.name = name;

        // validateUtility(cardSchema,this);

    }
}

module.exports = Member;
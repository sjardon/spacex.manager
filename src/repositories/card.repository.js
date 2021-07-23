
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

    serialize(entity){

        // Custom models to Trello models
        
        const { id,title,description,list,member,label } = entity;

        const finalEntity = {};
        finalEntity['name'] = title;
        finalEntity['desc'] = description;
        
        if(list){
            if(list['id']){

                finalEntity['idList'] = list.id;
            }
        }

        if(member){
            if(member['id']){

                // !-- This have to be for many members

                finalEntity['idMembers'] = member.id;
            }
        }

        if(label){
            if(label['id']){
                finalEntity['idLabel'] = label.id;
            }
        }

        return finalEntity;


    }
}


module.exports = CardReopository;
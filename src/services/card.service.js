const { CardRepository, CardLabelRepository } = require('../repositories/');

// const { createBug,buildMember,buildLabel } = require('../models');

const { cardBuilder } = require('../builders/');

const BaseService = require('./base.service');
const { createCard } = require('../models');

class CardService extends BaseService{

    constructor(){
        super(CardRepository);
    }

    async create(entity){

        const { type } = entity;
        
        let card = await cardBuilder(entity,type);
        
        
        const cretedCard = await this.repository.create(card);
        
        
        if(cretedCard){
            
            const { label } = card;
            
            if(label){
                const cardLabelRepository = new CardLabelRepository();
                cardLabelRepository.setIdCard(cretedCard.id);
                
                const createdLabel = await cardLabelRepository.create(label);
            }
        }
        
        return card;
    }

}

module.exports = CardService;
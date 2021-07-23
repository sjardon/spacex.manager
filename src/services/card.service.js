const { CardRepository, CardLabelRepository } = require('../repositories/');

// const { createBug,buildMember,buildLabel } = require('../models');

const { cardBuilder } = require('../builders/');

const BaseService = require('./base.service');
const { createCard } = require('../models');

class CardService extends BaseService{
    
    constructor(){
        super(CardRepository);
    }
    
    async getAll(){
        
        const card = await this.repository.getAll();
        return card;
    }
    
    async get(id){
        const card = await this.repository.get(id);
        return card;
    }
    
    async create(entity){
        
        const { type } = entity;
        
        let card = await cardBuilder(entity,type);
        
        
        const createdCard = await this.repository.create(card);
        
        
        if(createdCard){
            
            const { label } = card;
            
            if(label){
                const cardLabelRepository = new CardLabelRepository();
                cardLabelRepository.setIdCard(createdCard.id);
                
                const createdLabel = await cardLabelRepository.create(label);
            }
        }
        
        return createdCard;
    }
    
}

module.exports = CardService;
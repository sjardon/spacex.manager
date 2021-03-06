const { CardService } = require('../services');

let _cardService = null;

class CardController {

    constructor(){
        _cardService = new CardService();
    }

    async all(req,res){

        try{
            
            const result = await _cardService.getAll();
            return res.json(result);
        }catch(err){
            return res.json(err);
        }
    }

    async show(req,res){

        try{
            const { card: cardId } = req.params;
            
            const result = await _cardService.get(cardId);

            return res.json(result);
        }catch(err){
            return res.json(err);
        }
    }

    async create(req,res){

        try{
            const { body: card } = req;
            
            const result = await _cardService.create(card);
            return res.json(result);
        }catch(err){
            return res.json(err);
        }

    }

}

module.exports = new CardController();
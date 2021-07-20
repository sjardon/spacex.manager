const { CardService } = require('../services');

let _cardService = null;

class CardController {

    constructor(){
        _cardService = new CardService();
    }

    async create(req,res){

        try{
            const { body: card } = req;

            const result = await _cardService.create(card);

            return res.json(result);
        }catch(err){
            return res.status(err.status).json(err);
        }

    }

}

module.exports = new CardController();
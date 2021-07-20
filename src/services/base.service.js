const { TRELLO } = require('../../config');
const axios = require('axios');

class BaseService{

    constructor(){
    }

    async get(id){
    }
    
    async getAll(){
    }

    async create(entity){

    

        try{

            const { data: response } = await axios.get(`${TRELLO.SRC}/members/me/organizations?key=${TRELLO.API_KEY}&token=${TRELLO.TOKEN}`);
            return response;
        }catch(err){
            console.log(err);
            

            err.status = 400;
            throw err;

        }


    }

    async update(id,entity){
    }

    async delete(id){
    }
}

module.exports = BaseService;
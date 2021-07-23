const { TRELLO } = require('../../config');
const axios = require('axios');



class BaseService{

    constructor(repository){
        this.repository = new repository();
    }

    async get(id){

        if(!id){
            const err = new Error();
            err.status = 400;
            err.message = "The id has to be sent";
            throw err;
        }
        
        return await this.repository.get(id);
    }
    
    async getAll(){
        
        if(!id){
            const err = new Error();
            err.status = 400;
            err.message = "The id has to be sent";
            throw err;
        }

        return await this.repository.getAll(id);
    }

    async create(entity){

        return await this.repository.create(entity);
    }

    async update(id,entity){

        if(!id){
            const err = new Error();
            err.status = 400;
            err.message = "The id has to be sent";
            throw err;
        }


        return await this.repository.update(id,entity);
    }

    async delete(id){

        if(!id){
            const err = new Error();
            err.status = 400;
            err.message = "The id has to be sent";
            throw err;
        }

        return await this.repository.delete(id);
    }
}

module.exports = BaseService;
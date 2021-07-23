
// const models = require('../models');

const { trelloApiUtility } = require('../utilities');

class BaseReopository{
    
    
    constructor(endpoints){
        this.endpoints = endpoints;
    }
    
    async get(id){

        if(!this.endpoints['get']){
            return false;
        }

        try{
            
            const data = await trelloApiUtility
            .setEndpoint(`${this.endpoints['get']}${ id }`)
            .get();

            return data;

        }catch(err){

            throw err;
        }
    }
    
    async getAll(){
        
        if(!this.endpoints['getAll']){
            return false;
        }

        try{ 
            const data = await trelloApiUtility
            .setEndpoint(this.endpoints['getAll'])
            .get();
            
            return data;
        }catch(err){
            
            throw err;
        }
    }
    
    async create(entity){

        if(!this.endpoints['create']){
            return false;
        }

        if(this['serialize']){
            entity = this.serialize(entity);
        }

        try{

            const data = await trelloApiUtility
            .setEndpoint(this.endpoints['create'])
            .setEntity(entity)
            .post();

            return data;

        }catch(err){

            throw err;
        }
    }
    
    async update(id,entity){

        if(!this.endpoints['update']){
            return false;
        }

        if(this['serialize']){
            entity = this.serialize(entity);
        }

        try{
            const data = await trelloApiUtility
            .setEndpoint(`${this.endpoints['update']}${id}`)
            .setEntity(entity)
            .put();

            return data;

        }catch(err){

            throw err;
        }

        
    }
    
    async delete(id){

        if(!this.endpoints['delete']){
            return false;
        }

        try{
            const data = await trelloApiUtility
            .setEndpoint(`${this.endpoints['delete']}${id}`)
            .delete();

            return data;

        }catch(err){
            err.status = 500;
            throw err;
        }
    }
}


module.exports = BaseReopository;
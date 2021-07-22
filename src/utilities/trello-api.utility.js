
const { TRELLO } = require('../../config');
const axios = require('axios');

class TrelloApiUtility{


    constructor(){
        this.init();
    }

    init(){
        this.endpoint = false;
        this.entity = false;
        this.fields = false;
    }

    setEndpoint(endpoint){
        this.endpoint = endpoint;
        return this;
    }

    setEntity(entity){
        this.entity = entity;
        return this;
    }

    setFields(fields){
        this.fields = fields
        return this;
    }

    async get(){

        const { SRC } = TRELLO;

        const query = this.getQuery();

        try{
            
            // !-- Add to retry if fail.

            const { data } = await axios.get(`${SRC}${this.endpoint}${query}`);
            
            return data;
        }catch(err){
            err.status = 500;
            throw err;
        }
    }

    async post(){

        const { SRC } = TRELLO;

        const query = this.getQuery();

        try{

            // !-- Add to retry if fail.
            console.log(`${SRC}${this.endpoint}${query}`);
            const { data } = await axios.post(`${SRC}${this.endpoint}${query}`);
            
            return data;
            
        }catch(err){
            err.status = 500;
            throw err;
        }
    }

    async put(){

        const { SRC } = TRELLO;

        const query = this.getQuery();

        try{
            
            // !-- Add to retry if fail.

            const { data } = await axios.put(`${SRC}${this.endpoint}${query}`);
            
            return data;
        }catch(err){
            err.status = 500;
            throw err;
        }
    }

    async delete(){

        const { SRC } = TRELLO;

        const query = this.getQuery();

        try{
            
            // !-- Add to retry if fail.

            const { data } = await axios.delete(`${SRC}${this.endpoint}${query}`);
            
            return data;
        }catch(err){
            
            throw err;
        }
    }

    getQuery(){
        
        const { API_KEY, TOKEN } = TRELLO;
        
        let query = false;

        // Get fields filters string

        let strFields = false;

        if(this.fields){
            if(Array.isArray(this.fields)){
                strFields = this.fields.join(',');
            }else{
                strFields = this.fields;
            }
        }

        // Get a key-value object

        let parameters = Object.assign(
            {
                key: API_KEY,
                token: TOKEN
            },
            ( this.entity ? this.entity : {} ),
            ( strFields ? { fields: strFields } : {} ),
        );

        // Get query string

        if(typeof parameters == 'object'){
            
            query = Object.keys(parameters).map( val => `${val}=${parameters[val]}`).join('&');
        }


        return (query ? '?'+query : '');
    }
}

module.exports = new TrelloApiUtility();
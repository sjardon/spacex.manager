// Schema: Como tiene que ser el objeto
// Validator: Valida que el esquema se cumpla
// Build: Crea un nuevo objeto con los datos recibidos

// issue, bug, task -> extend card
// cardBuilder -> Build a card by type property

class Card{
    constructor(entity){

        const { id, title, description, list, member, label } = entity;

        this.id = id;
        this.title = title;
        this.description = description;
        this.list = list;
        this.member = member;
        this.label = label;

    }
}

module.exports = Card;
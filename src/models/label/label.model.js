


class Label{
    constructor(entity){

        const { id, name, color } = entity;

        this.id = id;
        this.name = name;
        this.color = color || null;

    }
}

module.exports = Label;
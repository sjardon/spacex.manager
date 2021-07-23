const { BoardMemberRepository } = require('../../repositories');
const { createTask, createList, createLabel } = require('../../models');

module.exports = async (entity) => {


    const { title,label } = entity;

    const task = {
        title: title
    }
    
    // Get "To Do" List -> set "To Do" List.
    
    // id is "To Do" List id
    
    task['list'] = createList({ id: '60f71dac106f474c7100c3f7' });

    if(label){
        task['label'] = createLabel(label);
    }

    return createTask(task);
}
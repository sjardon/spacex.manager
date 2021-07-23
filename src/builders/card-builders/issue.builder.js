// const { BoardMemberRepository } = require('../../repositories');
const { createIssue, createList } = require('../../models');

const errorUtility = require('../../utilities/error.utility');

const _words = ['Lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','Maecenas','et','dolor','elementum','tristique','metus','aliquam','semper','est','Sed','rutrum','nibh','purus','sed','congue','arcu','tincidunt','sed','Integer','quis','pretium','ligula','Duis','facilisis','pulvinar','purus','cursus','consectetur','ante','fringilla','ac','Mauris','aliquam','libero','in','volutpat','sollicitudin','risus','metus','euismod','eros','eu','vestibulum','arcu','ipsum','nec','eros','Ut','laoreet','euismod','erat','tincidunt','maximus','Cras','molestie','erat','sit','amet','ultrices','hendrerit','In','vel','purus','et','sem','ultrices','dapibus','eu','in'];

module.exports = async (entity) => {


    const { title,description } = entity;

    const bug = {
        title: title,
        description: description
    }
    
    // id is "To Do" List id
    
    bug['list'] = createList({ id: '60f71dac106f474c7100c3f7' });

    return createIssue(bug);
}
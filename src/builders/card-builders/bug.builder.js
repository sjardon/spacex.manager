const { BoardMemberRepository } = require('../../repositories');
const { createBug, createMember, createList, createLabel } = require('../../models');

const errorUtility = require('../../utilities/error.utility');

const _words = ['Lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','Maecenas','et','dolor','elementum','tristique','metus','aliquam','semper','est','Sed','rutrum','nibh','purus','sed','congue','arcu','tincidunt','sed','Integer','quis','pretium','ligula','Duis','facilisis','pulvinar','purus','cursus','consectetur','ante','fringilla','ac','Mauris','aliquam','libero','in','volutpat','sollicitudin','risus','metus','euismod','eros','eu','vestibulum','arcu','ipsum','nec','eros','Ut','laoreet','euismod','erat','tincidunt','maximus','Cras','molestie','erat','sit','amet','ultrices','hendrerit','In','vel','purus','et','sem','ultrices','dapibus','eu','in'];

module.exports = async (entity) => {


    const { description } = entity;

    const bug = {
        title: "bug-"+_words[Math.floor(Math.random() * (_words.length-1))]+"-"+Math.floor(Math.random() * 200),
        description: description
    }
    
    // Get random member -> set random member.

    const boardMemberRepository = new BoardMemberRepository();
    boardMemberRepository.setIdBoard('60f71dac106f474c7100c3f6');
    const members = await boardMemberRepository.getAll();
    
    if(members.length==0){
        errorUtility('Not members in this board',404);
    }

    const member = members[Math.floor(Math.random() * (members.length-1))];

    bug['member'] = createMember({ id: member.id });


    // Get "To Do" List -> set "To Do" List.
    
    // id is "To Do" List id
    
    bug['list'] = createList({ id: '60f71dac106f474c7100c3f7' });
    bug['label'] = createLabel({ name: 'Bug', color: 'purple' });

    return createBug(bug);
}